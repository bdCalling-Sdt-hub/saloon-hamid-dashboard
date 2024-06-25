import { Button, Table, } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FiEye, } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegTrashCan, FaStar } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

import { GoArrowUpRight } from "react-icons/go";
const data = [
  {
    key: "1",
    name: "Tushar",
    img: "https://i.ibb.co/B2xfD8H/images.png",
    Salon: "Babaji Salon",
    Review: 5,
  },
  {
    key: "2",
    name: "Tushar",
    img: "https://i.ibb.co/B2xfD8H/images.png",
    Salon: "Babaji Salon",
    Review: 5,
  },
];

const TotalSellerListTable = () => {
  const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
  const [open, setOpen] = useState();
  const dropdownRef = useRef();
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
      title: "Name",
      dataIndex: "name",
      key: "username",
      render: (_, record) => (<div className="flex justify-start items-center gap-2">
        <img className="w-10 h-10 rounded-full" src={record?.img} alt="" />
        <p>{record?.name?.slice(0, 5)}..</p>
      </div>)
    },
    {
      title: "Salon",
      dataIndex: "Salon",
      key: "Salon",
      render: (_, record) => <p>{record?.Salon?.slice(0, 6)}..</p>
    },
    {
      title: "Review",
      dataIndex: "Review",
      key: "Review",
      render: (_, record) => (<div className="flex justify-start items-center gap-2">
        <FaStar className="text-yellow-500" />
        <p>{record?.Review}/5</p>
      </div>)
    },

    {
      title: "ACTION",
      dataIndex: "printView",
      key: "printView",
      render: (_, record) => (<GoArrowUpRight className="text-blue-500 text-lg" />),
    },
  ];


  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen("");
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ height: "fit-content", borderRadius: "8px", background: "white", padding: "15px 24px 0 24px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "20px", fontWeight: 600, color: "#2F2F2F" }}>Total Seller List</h1>
        <Link to="/seller-list">
          <p style={{ color: "#F27405", fontSize: "12px", textDecoration: "underline" }}>VIEW ALL</p>
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  )

};
export default TotalSellerListTable;
