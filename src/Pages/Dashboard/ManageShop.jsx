import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Dropdown, Form, Input, Modal, Select, Slider, Table, Button, Checkbox, } from 'antd';
import { FaPlus, FaRegFilePdf, FaRegTrashCan, FaStar, FaUserCheck } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { GoArrowUpRight } from 'react-icons/go';
import { TfiReload } from 'react-icons/tfi';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import CreateSalonForm from '../../Components/Form/CreateSalonForm';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import CreateSalonCategoryFrom from '../../Components/Form/CreateSalonCategoryFrom';
import CreateProductFrom from '../../Components/Form/CreateProductFrom';
import { LuFileSpreadsheet } from 'react-icons/lu';
const data = [
    {
        key: "1",
        name: "Tushar",
        email: "tushar@gmail.com",
        date: "18 Jul, 2023  4:30pm",
        category: 'Hair Style',
        img: "https://i.ibb.co/B2xfD8H/images.png",
    },
];


const ManageShop = () => {
    const [formFor, setFormFor] = useState('add')
    const [value, setValue] = useState(new URLSearchParams(window.location.search).get('date') || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }));
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [open, setOpen] = useState(false)
    const [openAddSalon, setOpenAddSalon] = useState(false)
    const items = [
        {
            label: "Car",
            key: "Car",
        },
        {
            label: "Bike",
            key: "Bike",
        },
        {
            label: "Cycle",
            key: "Cycle",
        },
    ];

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    }
    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "Products image",
            dataIndex: "img",
            key: "Products image",
            render: (_, record) => (<div className="flex justify-start items-center gap-2">
                <img className="w-10 h-10 rounded-full" src={record?.img} alt="" />
            </div>)
        },
        {
            title: "Products name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "ACTION",
            dataIndex: "printView",
            key: "printView",
            render: (_, record) => (
                <div className='flex justify-start items-center gap-2'>
                    <FaEdit onClick={() => { setOpenAddSalon(true); setFormFor('update') }} className="text-[#F25C05] text-2xl cursor-pointer" />
                    <MdDelete onClick={() => { setOpen(true) }} className="text-[#F25C05] text-2xl cursor-pointer" />
                </div>
            ),
        },
    ];
    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px"
        }}>
            <div className='mb-6 flex justify-between items-center'
            >
                <h1 style={{ fontSize: "20px", fontWeight: 600, color: "#2F2F2F" }}>All E-Shop products</h1>
                <div className='flex justify-end items-center gap-3'>
                    <Select className='min-w-44 h-[40px]'
                        onChange={handleChange}
                        mode="multiple"
                        showSearch
                        placeholder="Category"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            { value: '1', label: 'Jack' },
                            { value: '2', label: 'Lucy' },
                            { value: '3', label: 'Tom' },
                        ]}
                    />
                    <button className='text-2xl'>
                        <LuFileSpreadsheet />
                    </button>
                    <button onClick={() => { setOpenAddSalon(true); setFormFor('add') }} className='flex justify-start items-center gap-2 text-white p-2 rounded-md bg-[#F27405]'>
                        <FaPlus />
                        Add Product
                    </button>
                </div>
            </div>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        pageSize: 10,
                        defaultCurrent: parseInt(page),
                        onChange: handlePageChange
                    }}
                />
            </div>
            <Modal
                open={openAddSalon}
                onCancel={() => setOpenAddSalon(false)}
                centered
                footer={false}
                width={500}
            >
                <div className='bg-white p-6 rounded-md'>
                    <p className='text-[#F27405] text-lg font-medium'>{formFor == 'add' ? 'Add' : 'Update'} E-Shop products</p>
                    <CreateProductFrom formFor={formFor} setOpen={setOpenAddSalon} />
                </div>
            </Modal>
            <Modal
                centered
                open={open}
                onCancel={() => setOpen(false)}
                width={400}
                footer={false}
            >
                <div className="p-6 text-center">
                    <p className="text-[#F27405] text-center font-semibold">
                        Are you sure !
                    </p>
                    <p className="pt-4 pb-12 text-center">
                        Do you want to delete this Product ?
                    </p>
                    <button
                        onClick={() => setOpen(false)}
                        className="bg-[#F27405] py-2 px-5 text-white rounded-md"
                    >
                        Confirm
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default ManageShop
