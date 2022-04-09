import { Button, Space } from "antd";
import RoundInput from "../ui/RoundInput";

const SignupAuth = () => {
  return (
    <>
      <Space
          style={{
            width: "50%",
          }}
          direction="vertical"
          size={20}
        >
          <RoundInput
            placeholder="Enter your email"
            size="large"
            type="email"
            name="email"
          />
          <RoundInput
            placeholder="Enter your password"
            size="large"
            type="password"
          />
          <RoundInput
            placeholder="Confirm your password"
            size="large"
            type="password"
          />
          <Button size="large" shape="round" type="primary">
            Sign up
          </Button>
        </Space>
    </>
  );
};

export default SignupAuth;
