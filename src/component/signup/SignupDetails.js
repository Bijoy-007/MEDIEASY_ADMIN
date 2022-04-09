import { AutoComplete, Button, Form } from "antd";
import { useState } from "react";

import RoundInput from "../ui/RoundInput";
import classes from "./Signup.module.css";

const SignupDetails = () => {
  const [options, setOptions] = useState([
    {
      label: "Ruby general hospital",
      value: "RB",
    },
    {
      label: "Karnataka general hospital",
      value: "KG",
    },
  ]);

  const searchHandler = () => {};
  const selectHandler = () => {};

  return (
    <Form name="signupDetails">
      <AutoComplete
        allowClear
        options={options}
        size="large"
        onSearch={searchHandler}
        onSelect={selectHandler}
        className={classes["details-input"]}
      >
        <RoundInput
          name="placeId"
          className={classes["details-input"]}
          size="large"
          placeholder="Type hospital name"
          style={{
            marginLeft: "0",
          }}
        />
      </AutoComplete>
      <RoundInput
        name="address"
        className={classes["details-input"]}
        size="large"
        placeholder="Full address"
      />
      <RoundInput
        name="helpline"
        className={classes["details-input"]}
        size="large"
        placeholder="Helpline number"
      />
      <br />
      <Button type="primary" shape="round" size="large">
        Finish
      </Button>
    </Form>
  );
};

export default SignupDetails;
