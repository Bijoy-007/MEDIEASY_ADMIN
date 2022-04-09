import { Card, Button, Space } from "antd";
import RoundInput from "./ui/RoundInput";

const LoginCard = () => {
  return (
    <>
      <Card
        style={{
          textAlign: "center",
        }}
        title="Sign in"
      >
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
          />
          <RoundInput
            placeholder="Enter your password"
            size="large"
            type="password"
          />
          <Button size="large" shape="round" type="primary">
            Sign in
          </Button>
        </Space>
      </Card>
    </>
  );
};

export default LoginCard;
