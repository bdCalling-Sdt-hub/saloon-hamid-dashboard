import { Dropdown } from 'antd';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DownOutlined } from "@ant-design/icons";
const TotalSalonstatistics = () => {
    const [year, setYear] = useState(2024)
    const data = [
        {
            name: 'jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jun',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sept',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Des',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const items = [
        {
            label: 2023,
            key: "2023",
        },
        {
            label: 2024,
            key: "2024",
        },
        {
            label: 2025,
            key: "2025",
        },
        {
            label: 2026,
            key: "2026",
        },
    ];
    const onClick = ({ key }) => {
        setYear(key)
    };
    return (
        <div className='w-full h-[400px]'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ marginTop: "10px", fontSize: "20px", fontWeight: 600, marginBottom: "10px", color: "black", }}>Total Salon statistics</p>
                <Dropdown menu={{ items, onClick }} >
                    <p style={{
                        // width: "79px", 
                        cursor: "pointer",
                        color: '#717171',
                        border: "1px solid #E9E9E9",
                        borderRadius: "4px",
                        padding: "4px 12px"
                    }} onClick={(e) => e.preventDefault()}
                    >
                        {year}
                        <DownOutlined style={{ paddingLeft: "18px" }} color='#717171' />
                    </p>
                </Dropdown>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#734D2C" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TotalSalonstatistics
