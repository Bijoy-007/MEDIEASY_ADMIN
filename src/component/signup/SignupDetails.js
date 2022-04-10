import { AutoComplete, Button, Form, notification } from "antd";
import { useState } from "react";

import searchPlaceByName from "../../api/searchPlaceByName";
import saveDetails from "../../api/saveDetails";
import RoundInput from "../ui/RoundInput";
import classes from "./Signup.module.css";

const { Item } = Form;

const SignupDetails = (props) => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [placeId, setPlaceId] = useState("");

  const searchHandler = async (query) => {
    try {
      if (query.length === 0) {
        return;
      }
      const { ok, data } = await searchPlaceByName({ query });
      setOptions(
        ok
          ? data.map((place) => ({
              label: place.display_name,
              value: place.display_name,
              placeId: place.place_id,
            }))
          : []
      );
    } catch (err) {
      notification.error({ message: err.message });
    }
  };
  const selectHandler = (value, option) => {
    setPlaceId(option.placeId);
  };

  const finishHandler = async (details) => {
    setIsLoading(true);
    try {
      const hospitalId = localStorage.getItem("id");
      const { ok, message } = await saveDetails({
        ...details,
        name: details.name,
        hospitalId,
        placeId,
      });
      if (ok) {
        notification.success({
          message: "Successfully saved all details",
        });
        localStorage.removeItem("id");
        props.onSuccess();
      } else {
        notification.error({
          message: message,
        });
        props.onError();
      }
    } catch (err) {
      notification.error({ message: err.message });
      props.onError();
    }
    setIsLoading(false);
  };

  return (
    <Form name="signupDetails" onFinish={finishHandler}>
      <Item
        rules={[
          {
            required: true,
            message: "Please enter your hospital name",
          },
        ]}
        className={classes["details-input"]}
        name="name"
      >
        <AutoComplete
          allowClear
          options={options}
          size="large"
          onSearch={searchHandler}
          onSelect={selectHandler}
          className={classes["details-input"]}
        >
          <RoundInput
            className={classes["details-input"]}
            size="large"
            placeholder="Type hospital name"
            style={{
              marginLeft: "0",
            }}
          />
        </AutoComplete>
      </Item>
      <Item
        rules={[
          {
            required: true,
            message: "Please enter your hospital address",
          },
        ]}
        name="address"
      >
        <RoundInput
          className={classes["details-input"]}
          size="large"
          placeholder="Full address"
        />
      </Item>
      <Item
        rules={[
          {
            required: true,
            message: "Please enter your helpline number",
          },
        ]}
        name="helpline"
      >
        <RoundInput
          type="tel"
          className={classes["details-input"]}
          size="large"
          placeholder="Helpline number"
        />
      </Item>
      <Item
        rules={[
          {
            required: true,
            message: "Please enter your number",
          },
        ]}
        name="number"
      >
        <RoundInput
          className={classes["details-input"]}
          size="large"
          placeholder="Mobile number"
          type="tel"
        />
      </Item>
      <br />
      <Button
        loading={isLoading}
        htmlType="submit"
        type="primary"
        shape="round"
        size="large"
      >
        Finish
      </Button>
    </Form>
  );
};

export default SignupDetails;
