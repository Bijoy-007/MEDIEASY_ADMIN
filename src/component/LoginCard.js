import { Card, Button, Space, Form, notification } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signin from "../api/signin";

import RoundInput from "./ui/RoundInput";

const { Item } = Form;

const LoginCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signinHandler = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const { ok, data, message } = await signin({
        hospitalEmail: email,
        hospitalPassword: password,
      });
      if (ok) {
        const { token } = data;
        localStorage.setItem("token", token);
        navigate("/app/dashboard");
        notification.success({ message: "Successfully logged in" });
      } else {
        notification.error({ message: message });
      }
    } catch (err) {
      notification.error({ message: err.message });
    }
    setIsLoading(false);
  };

  return (
    <Form name="login" onFinish={signinHandler}>
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
          <Item
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
            name="email"
          >
            <RoundInput
              placeholder="Enter your email"
              size="large"
              type="email"
            />
          </Item>
          <Item
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
            name="password"
          >
            <RoundInput
              placeholder="Enter your password"
              size="large"
              type="password"
            />
          </Item>

          <Button
            loading={isLoading}
            htmlType="submit"
            size="large"
            shape="round"
            type="primary"
          >
            Sign in
          </Button>
        </Space>
      </Card>
    </Form>
  );
};

export default LoginCard;
