import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/app/dashboard">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          <NavLink to="/app/settings">Settings</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
