import { Layout } from "antd";
import Navbar from "../component/Navbar";

const { Header, Content } = Layout;

const AppLayout = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Header>MEDIEASY</Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
