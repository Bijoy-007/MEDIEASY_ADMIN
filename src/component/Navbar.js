import { useState } from "react";
import { Layout, Menu, notification } from "antd";
import {
  LogoutOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();
  const selectHandler = (item) => {
    setSelectedKey(item.key);
  };

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const logOutHandler = () => {
    localStorage.removeItem("token");
    notification.success({ message: "Logged out successfully" });
    navigate("/");
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        selectedKeys={[selectedKey]}
        onSelect={selectHandler}
        theme="dark"
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/app/dashboard">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          <NavLink to="/app/settings">Settings</NavLink>
        </Menu.Item>
        <Menu.Item key="3" onClick={logOutHandler} icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
