import { Card, Steps } from "antd";

import SignupAuth from "./SignupAuth";
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
        current={0}
      >
        <Step title="Credentials" />
        <Step title="Email verification" />
        <Step title="Basic details" />
        <Step title="Finish" />
      </Steps>
      {/* <SignupAuth /> */}
      <SignupOTP />
    </Card>
  );
};

export default SignupCard;
