import { useState } from "react";
import { Button, Form, notification, Space } from "antd";

import RoundInput from "../ui/RoundInput";
import signup from "../../api/signup";
const { Item } = Form;

const SignupAuth = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = async (credentials) => {
    try {
      setIsLoading(true);

      const { ok, data, message } = await signup(credentials);
      if (ok) {
        const { id } = data;
        localStorage.setItem("id", id);
        notification.success({
          message: "Please verify your email to continue",
        });
        props.onSuccess();
      } else {
        notification.error({
          message: message,
        });
        props.onError();
      }
      setIsLoading(false);
    } catch (err) {
      notification.error({ message: err.message });
      props.onError();
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
        <Item
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
          name="hospitalEmail"
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
          name="hospitalPassword"
        >
          <RoundInput
            placeholder="Enter your password"
            size="large"
            type="password"
          />
        </Item>
        <Item
          rules={[
            {
              required: true,
              message: "Please enter confirm password",
            },
          ]}
          name="hospitalConfirmPassword"
        >
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
