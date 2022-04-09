import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

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
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
