/*
 * This page is the first page that the user sees when they open the app.
 */

import { Tabs, Card } from "antd";
import LoginCard from "../component/LoginCard";
import SignupCard from "../component/signup/SignupCard";

const { TabPane } = Tabs;

const Landing = () => {
  return (
    <Card style={{ width: "50%", margin: "auto", textAlign: "center" }}>
      <Tabs centered defaultActiveKey="1">
        <TabPane tab="Signup" key="1">
          <SignupCard />
        </TabPane>
        <TabPane tab="Signin" key="2">
          <LoginCard />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default Landing;
