import { useState } from "react";
import { Button, Form, notification, Space } from "antd";

import RoundInput from "../ui/RoundInput";
import signup from "../../api/signup";
const { Item } = Form;

const SignupAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = async (credentials) => {
    console.log(credentials);
    try {
      setIsLoading(true);

      const { ok, data, message } = await signup(credentials);
      if (ok) {
        const id = { data };
        localStorage.setItem("id", JSON.stringify(id));
        notification.success({
          message: "Please verify your email to continue",
        });
      } else {
        notification.error({
          message: message,
        });
      }
      console.log(data);

      setIsLoading(false);
    } catch (err) {
      notification.error({ message: err.message });
      setIsLoading(false);
    }
  };

  return (
    <Form onFinish={signupHandler} name="Signup">
      <Space
        style={{
          width: "50%",
        }}
        direction="vertical"
        size={20}
      >
        <Item name="hospitalEmail">
          <RoundInput
            placeholder="Enter your email"
            size="large"
            type="email"
          />
        </Item>
        <Item name="hospitalPassword">
          <RoundInput
            placeholder="Enter your password"
            size="large"
            type="password"
          />
        </Item>
        <Item name="hospitalConfirmPassword">
          <RoundInput
            placeholder="Confirm your password"
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
          Sign up
        </Button>
      </Space>
    </Form>
  );
};

export default SignupAuth;
