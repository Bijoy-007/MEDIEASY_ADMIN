import { useState } from "react";
import { Button } from "antd";
import OtpInput from "react-otp-input";

const SignupOTP = () => {
  const [otp, setOtp] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          marginLeft: "34%",
          marginBottom: "1rem",
          width: "50%",
        }}
      >
        <OtpInput
          value={otp}
          inputStyle={{
            border: "3px solid #d9d9d9",
            width: "3rem",
            height: "3rem",
            borderRadius: "10px",
          }}
          onChange={(otp) => setOtp(otp)}
          numInputs={4}
          separator={<span>-</span>}
        />
      </div>
      <Button type="primary" size="large" shape="round">
        Validate OTP
      </Button>
    </div>
  );
};
export default SignupOTP;
