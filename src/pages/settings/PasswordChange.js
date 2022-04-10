import { Button, Form, notification, Space } from "antd";
import { useState } from "react";
import Layout from "../../layout/Layout";
import RoundInput from "../../component/ui/RoundInput";
import passwordChange from "../../api/passwordChange";

import classes from "./PasswordChange.module.css";

const { Item, useForm } = Form;

const PasswordChange = () => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const passwordChangeHandler = async (credentials) => {
    try {
      setIsLoading(true);
      const { ok, message } = await passwordChange(credentials);
      if (ok) {
        notification.success({
          message: "Please changed successfully",
        });
        form.setFieldsValue({
          hospitalPassword: "",
          newPassword: "",
        });
      } else {
        notification.error({
          message: message,
        });
      }
      setIsLoading(false);
    } catch (err) {
      notification.error({ message: err.message });
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <div className={classes.wrapper}>
        <Form
          form={form}
          onFinish={passwordChangeHandler}
          name="PasswordChange"
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
                  message: "Please enter your old password",
                },
              ]}
              name="hospitalPassword"
            >
              <RoundInput
                placeholder="Enter your old password"
                size="large"
                type="password"
              />
            </Item>
            <Item
              rules={[
                {
                  required: true,
                  message: "Please enter new password",
                },
              ]}
              name="newPassword"
            >
              <RoundInput
                placeholder="Please enter new password"
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
              Change Password
            </Button>
          </Space>
        </Form>
      </div>
    </Layout>
  );
};

export default PasswordChange;
