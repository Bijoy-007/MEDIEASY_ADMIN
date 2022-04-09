import { Layout } from "antd";

import Navbar from "../component/Navbar";
import AppHeader from "../component/ui/AppHeader";

const { Header, Content } = Layout;

const AppLayout = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Header
          style={{
            backgroundColor: "#fff",
          }}
        >
          <AppHeader />
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
