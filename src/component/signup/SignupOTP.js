import { useState } from "react";
import { Button, notification } from "antd";
import OtpInput from "react-otp-input";
import verifyOtp from "../../api/verifyOtp";

const SignupOTP = (props) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const verifyOtpHandler = async () => {
    setIsLoading(true);
    if (otp.length !== 6) {
      notification.error({ message: "Please enter a valid OTP" });
    } else {
      try {
        const id = localStorage.getItem("id");
        console.log(id);
        const { ok, message } = await verifyOtp({
          id,
          otp,
        });
        if (ok) {
          notification.success({
            message: "Your account has been verified",
          });
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
    }
    setIsLoading(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          marginBottom: "1rem",
          width: "50%",
          textAlign: "center",
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
          numInputs={6}
          separator={<span>-</span>}
        />
      </div>
      <Button
        loading={isLoading}
        onClick={verifyOtpHandler}
        type="primary"
        size="large"
        shape="round"
      >
        Validate OTP
      </Button>
    </div>
  );
};
export default SignupOTP;
