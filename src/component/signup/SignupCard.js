import { Card, Steps } from "antd";

import SignupAuth from "./SignupAuth";
import SignupComplete from "./SignupComplete";
import SignupDetails from "./SignupDetails";
import SignupOTP from "./SignupOTP";

const { Step } = Steps;

const SignupCard = () => {
  return (
    <Card title="Sign up">
      <Steps
        style={{
          marginBottom: "1rem",
        }}
        size="small"
        current={1}
      >
        <Step title="Credentials" />
        <Step title="Email verification" />
        <Step title="Basic details" />
        <Step title="Finish" />
      </Steps>
      {/* <SignupAuth /> */}
      {/* <SignupOTP /> */}
      {/* <SignupDetails /> */}
      <SignupComplete />
    </Card>
  );
};

export default SignupCard;
