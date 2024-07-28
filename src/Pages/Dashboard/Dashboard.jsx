import { Layout, Badge, } from "antd";
import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import LogoText from "../../assets/logo-text.png";
import { HiLogout } from "react-icons/hi";
import { LuUser, LuUserPlus } from "react-icons/lu";
import { TbCategoryMinus, TbShoppingCartDollar } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiNotification2Line, RiChat1Line, RiCopperDiamondLine } from "react-icons/ri";
const { Header, Sider, Content } = Layout;
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFileInvoiceDollar, FaFire, FaRuler, FaStore } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosChatbubbles, IoIosNotificationsOutline, IoMdNotificationsOutline } from "react-icons/io";
import categore from "../../assets/categore.png"
import category_w from "../../assets/category_w.png"
import eshop from "../../assets/eshop.png"
import eshop_w from "../../assets/eshop_w.png"
import eshop_category from "../../assets/eshop_category.png"
import eshop_category_w from "../../assets/eshop_category_w.png"
import transition from "../../assets/transition.png"
import transition_w from "../../assets/transition_w.png"
import invoice from "../../assets/invoice.png"
import invoice_w from "../../assets/invoice_w.png"
export const linkItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdDashboard size={24} />,
  },
  {
    title: "User details",
    path: "/seller-list",
    icon: <LuUser size={24} />,
  },
  {
    title: "Salons Details",
    path: "/salons-setails",
    icon: <FaStore size={24} />,
  },
  {
    title: "Salons Services",
    path: "/salons-services",
    icon: <FaFire size={24} />,
  },
  {
    title: "Services Category",
    path: "/services-category",
    img: categore,
    img_w: category_w
  },
  {
    title: "Manage E-Shop",
    path: "/manage-shop",
    img: eshop,
    img_w: eshop_w
  },
  {
    title: "E-Shop Category",
    path: "/product-category",
    img: eshop_category,
    img_w: eshop_category_w
  },
  {
    title: "Orders Transaction",
    path: "/orders-transaction",
    img: transition,
    img_w: transition_w
  },
  {
    title: "Salon Invoice",
    path: "/salon-invoice",
    img: invoice,
    img_w: invoice_w
  },
  {
    title: "Notifications",
    path: "/notification",
    icon: <IoMdNotificationsOutline size={24} />,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <IoIosChatbubbles size={24} />,
  },
  {
    title: "Make Admin",
    path: "/make-admin",
    icon: <LuUserPlus size={24} />,
  },
];
export const settingOptions = [
  {
    title: "Slider Setting",
    path: "/slider-setting",
  },
  {
    title: "Manage Haircut offers",
    path: "/manage-haircut-offers",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Privacy Policy",
    path: "/privacy",
  },
  {
    title: "Terms & Condition",
    path: "/terms-condition",
  },
]
const Dashboard = () => {

  const [dropdown, setDropdown] = useState(false)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/login');
    window.location.reload();
  }


  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="233px"
        trigger={null}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          overflowY: "hidden",
          zIndex: 2,
          backgroundColor: "white",
          overflowY: 'scroll'
        }}
      >
        <div className="mt-4 mb-6" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img
            src={LogoText}
            width="80%"
          />
        </div>


        <ul className="px-4"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            height: "100%",
            marginTop: 0
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                position: "relative",
                paddingLeft: "4px",
                display: "flex",
                alignItems: "center",
                transition: '.5s'
              }}
            >
              {
                item.path === pathname
                  ?
                  <div style={{ backgroundColor: "#F27405", position: "absolute", left: -10, top: 0, width: "8px", height: "100%", borderRadius: "0 10px 10px 0" }}></div>
                  :
                  null

              }
              <Link className={`${item.path === pathname ? "bg-[#F27405] text-[#FFFFFF]" : 'text-[#5C5C5C]'} py-2 rounded hover:bg-[#F27405] hover:text-[#FFFFFF] w-full px-2`}
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "auto  0 auto 0",
                  gap: "10px"
                }}
              >
                <div style={{ height: "24px", }}>
                  {item?.icon ? item.icon : <img src={location?.pathname == item?.path ? item?.img_w : item?.img} />}
                </div>
                <div style={{ fontSize: "14px", textAlign: "center", height: "fit-content" }}>{item.title}</div>
              </Link>
            </li>

          ))}

          <li onClick={() => {
            setDropdown(!dropdown)
          }}
            style={{
              width: "100%",
              height: "34px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              paddingLeft: '4px'
            }}
          >
            {
              dropdown
                ?
                <div style={{ backgroundColor: "#FBFBFB", position: "absolute", left: 0, top: 0, width: "6px", height: "38px", borderRadius: "0 10px 10px 0" }}></div>
                :
                null

            }
            <div style={{
              width: "100%",
              marginTop: 0,
              height: "38px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "47px",
              gap: "14px",
              color: "#F2F2F2",
              cursor: "pointer",
              padding: '12px 6px',
              borderRadius: '4px',
              position: "relative",
              backgroundColor: dropdown ? "#F27405" : '',
              color: dropdown ? "#fff" : '#5C5C5C',
            }}>
              <IoSettingsOutline size={24} />

              <p style={{ fontSize: "15px", textAlign: "center", }}>Settings</p>
              {/* {
                dropdown
                  ?
                  <MdKeyboardArrowDown className="absolute top-[50%] right-0 translate-y-[-50%]" size={24} />
                  :
                  <MdKeyboardArrowRight className="absolute top-[50%] right-0 translate-y-[-50%]" size={24} />
              } */}
            </div>
            {
              dropdown
              &&
              <div
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "40px",
                  width: '100%',
                  paddingLeft: '4px',
                  zIndex: '100'
                }}
              >
                {
                  settingOptions?.map((item, index) => <Link key={index} to={item?.path} style={{
                    textAlign: 'center',
                    color: item.path === pathname ? "#FBFBFB" : '#5C5C5C',
                    width: '100%',
                    backgroundColor: item.path === pathname ? "#f27405" : '#FBFBFB',
                    display: 'block',
                    padding: '7px 0px',
                    borderRadius: '4px',
                  }}>
                    <p>{item?.title}</p>
                  </Link>)
                }
              </div>
            }

          </li>
          <li onClick={handleLogOut} className="hover:bg-[#F27405] hover:text-white text-[#5C5C5C] cursor-pointer rounded-md py-1"
            style={{
              width: "100%",
              position: "relative",
              paddingLeft: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: 'start',
              transition: '.5s',
              gap: '6px'
            }}
          >
            <HiLogout size={24} />
            <button style={{
              textAlign: 'left',
              // width: '100%',
              display: 'block',
              padding: '7px 0px',
              borderRadius: '4px',
            }}>
              <p>Log Out</p>
            </button>
          </li>
          {/* <li
            style={{
              width: "100%",
              left: "0",
              position: "absolute",
              bottom: "53px",
            }}
          >

            <div onClick={handleLogOut} style={{ display: "flex", width: "fit-content", margin: "0 auto 0 auto", alignItems: "center", gap: "14px", cursor: "pointer", justifyContent: "center" }}>
              <div style={{ color: "#6A6D7C", fontSize: "14px" }}>Logout</div>
              <HiLogout color="#6A6D7C" size={24} />
            </div>
          </li> */}

        </ul>

      </Sider>
      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: "#FFF",
            display: "flex",
            justifyContent: "end",
            paddingRight: "60px",
            paddingLeft: "270px"
          }}
        >
          <div
            style={{
              width: "280px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              justifyContent: "end"
            }}
          >

            <Badge color="#C30303" count={5}>
              <Link to="/notification" >
                <IoIosNotificationsOutline color="#6A6A6A" size={24} />
              </Link>
            </Badge>
            <div onClick={() => navigate('/profile')} className="border cursor-pointer"
              style={{
                width: "170px",
                height: "42px",
                background: "#FFFFFF",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "10px"
              }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotvhr2isTRMEzzT30Cj0ly77jFThGXr0ng&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "100%" }} alt="" />
              <h2 style={{ color: "black", fontSize: "10px" }}>DR. Jim ahhmed</h2>
            </div>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "90px",
            marginBottom: "20px",
            marginLeft: "255px",
            marginRight: "40px",
            overflow: "auto",
            padding: "20px"
          }}
        >
          <Outlet />
        </Content>
      </Layout>


    </Layout>
  );
};
export default Dashboard;
