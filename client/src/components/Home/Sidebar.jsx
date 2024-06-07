import React, { useState } from "react";
import {
  MdBarChart,
  MdPieChartOutline,
  MdOutlineShowChart,
  MdOutlineLogout,
} from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { AiOutlineProfile } from "react-icons/ai";
import { PiStackBold } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";
import url from "../../assets/breathe_esg_logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
const {Sider } = Layout;
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}



const items = [
  getItem("Dashboard", "1", <MdBarChart />),
  getItem("Entity Manager", "2", <PiSquaresFour />),
  getItem("Data Manager", "3", <MdPieChartOutline />),
  getItem("Reporting", "4", <AiOutlineProfile />),
  getItem("Materiality", "5", <PiStackBold />),
  getItem("Suppliers", "6", <HiOutlineUsers />),
  getItem("Analytics", "7", <MdOutlineShowChart />),
  getItem("Targets", "8", <TbTargetArrow />),
];
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // setIsLoggedIn(false);
    // setUserInfo({
    //   password: "",
    //   email: "",
    //   confirmedPassword: "",
    // });
    navigate('/')
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#181818",
          colorText: "#ffffff",
        },
        components: {
          Menu: {
            itemSelectedColor: "#4FA556",
            itemSelectedBg: "#181818",
          },
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            backgroundColor: "#181818",
            padding: "10px",
          }}
        >
          <div className="menu-brand">
            <img className="menu-brand-logo" src={url} alt="breathe-esg-logo" />
            <div className="menu-brand-menu">BREATHE ESG</div>
          </div>
          <Menu
            style={{ borderColor: "transparent" }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
          <div
            style={{
              color: "red",
              margin: "4px",
              paddingLeft: "24px",
              paddingRight: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer"
            }}
            onClick={handleLogout}

          >
            <MdOutlineLogout />
            Logout
          </div>
        </Sider>
        
      </Layout>
    </ConfigProvider>
  );
};
export default Sidebar;
