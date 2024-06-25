import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";
import TotalSellerListTable from "../../../Components/Dashboard/TotalSellerListTable";
import TotalSellerChart from "./TotalSellerChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiUserGroup } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import salon from '../../../assets/salon.png'
import earning from '../../../assets/earning.png'
function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "Total User",
      count: "20.10K",
      icon: <HiUserGroup color="#F27405" size={32} />,
      color: "#F27405",
      bgColor: "#E2F7FC",
      extra: 'Daily user',
      extracount: 200
    },
    {
      name: "Total Salon",
      count: "320",
      color: "#734D2C",
      icon: <img src={salon} alt="" />,
      bgColor: "#FFE3C7"
    },
    {
      name: "Total Seller",
      count: "120",
      color: '#00B047',
      icon: <img src={earning} alt="" />,
      bgColor: "#FFF3D6"
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-3 items-center gap-4">
        {
          data?.map((item, index) => <div className="w-full h-full flex justify-between items-start bg-white rounded-md p-6" key={index}>
            <div className="flex w-[50%] gap-3 justify-start items-center ">
              <button style={{
                background: item?.bgColor
              }} className="p-2 rounded-full">
                {item?.icon}
              </button>
              <p className="text-lg font-semibold">{item?.name}</p>
            </div>
            <div className="w-[50%]">
              <div className="flex w-[100%] gap-3 justify-end items-center ">
                <p style={{
                  color: item?.color
                }} className={`text-2xl font-semibold`}>{item?.count}</p>
              </div>
              {
                item?.extra && <div className="flex w-[100%] gap-3 justify-end items-center mt-4">
                  <p>{item?.extra}</p>
                  <p style={{
                    color: 'green'
                  }} className={`text-base`}>{item?.extracount}</p>
                </div>
              }

            </div>
          </div>)
        }
      </div>
      {/* <Row gutter={26}>
        {
          data.map((item, index)=>
            <Col key={index}  xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
              <div  className='income-card'>
                  <div 
                    style={{
                      background: `${item.bgColor}`,
                      width: "64px",
                      height: "64px",
                      borderRadius: "100%",
                      display:"flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {item?.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize:"32px",
                        fontWeight:"600", 
                        color: "#50525D" ,
                      }}
                    >{item.count} +</p>
                    <p 
                      style={{
                        fontSize:"16px",
                        fontWeight:"400", 
                        color: "#6A6D7C" ,
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
              </div>
            </Col>
          )
        }
      </Row> */}
      <div style={{ marginTop: "20px", marginBottom: "15px", display: "grid", gridTemplateColumns: "auto auto auto", gap: "20px" }} >
        <div style={{ width: '500px', height: "276px", borderRadius: "15px", padding: "20px", backgroundColor: "#fff" }}>
          <DailyOverviewChart />
        </div>

        <div
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: '500px',
            height: "276px",
            padding: "10px 20px 20px 20px"
          }}
        >
          <TotalSellerChart />
        </div>

        <div
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: '500px',
            height: "276px",
            padding: "10px 20px 20px 20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between" }}>
            <h1 style={{ fontSize: "20px", fontWeight: 600, color: "#2F2F2F" }}>Top Seller</h1>
            <Link to="/top-seller-list">
              <p style={{ color: "#F27405", fontSize: "12px", textDecoration: "underline" }}>VIEW ALL</p>
            </Link>
          </div>
          <UserCard />
        </div>
      </div>
      <TotalSellerListTable />
    </div>
  );
}

export default DashboardHome;
