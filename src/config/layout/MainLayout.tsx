import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  LeftCircleOutlined,
  PieChartOutlined,
  RightCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps, theme } from "antd";
// import logo from "../../assets/svg/Logo.png";
// import logo2 from "../../assets/svg/Icon.svg";
import logo from '../../assets/images/login_union.svg'
import logo_n from '../../assets/images/noventer.svg'
import Header from "./Header";
import { FaUsers } from "react-icons/fa";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "dash", <PieChartOutlined />),
  getItem("Mijozlar", "clients-list", <FaUsers />),
  getItem("Bo'limlar", "departments", <FaUsers />),
  getItem("Xodimlar ro'yxati", "employees", <FaUsers />),
  getItem("Sozlamalar", "settings", <UserOutlined />, [
    getItem("Bo'limlar", "department"),
    getItem("Smenalar", "shift"),
    getItem("Filiallar", "branches"),
  ]),
];

const MainLayout = () => {
  const myToken = localStorage.getItem("access");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!myToken) {
      window.location.href = "/login";
    }
  }, [myToken]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuChangeHandle = (item: MenuItem) => {
    navigate(`/${item?.key}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={null}
        // breakpoint="lg"
        collapsedWidth="120px"
      >
        <div className="demo-logo-vertical" />
        <div className="lg:flex gap-2 my-3 mx-4 py-2 rounded-xl bg-gray-400 relative">
          {!collapsed ? (
            <img className="max-h-[50px]" src={logo} alt="logo" />
          ) : (
            <img className="h-8 mx-auto" src={logo} alt="logo" />
          )}
          <img src={logo_n} alt="noventer" />
          <div className="absolute top-1 right-[-35px]">
            <Button
              type="primary"
              icon={
                !collapsed ? <LeftCircleOutlined /> : <RightCircleOutlined />
              }
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          </div>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={menuChangeHandle}
        />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: "84vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginTop: 24,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Noventer TEAM ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
