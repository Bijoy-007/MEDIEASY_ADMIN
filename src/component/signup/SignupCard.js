import { Card, Steps } from "antd";
import { useState } from "react";

import SignupAuth from "./SignupAuth";
import SignupComplete from "./SignupComplete";
import SignupDetails from "./SignupDetails";
import SignupOTP from "./SignupOTP";

const { Step } = Steps;

const SignupCard = () => {
  const [step, setStep] = useState(0);
  const [hasError, setHasError] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
    setHasError(false);
  };
  const error = () => {
    setHasError(true);
  };

  return (
    <Card title="Sign up">
      <Steps
        style={{
          marginBottom: "1rem",
        }}
        size="small"
        current={step}
        status={hasError ? "error" : "process"}
      >
        <Step title="Credentials" />
        <Step title="Email verification" />
        <Step title="Basic details" />
        <Step title="Finish" />
      </Steps>

      {step === 0 && <SignupAuth onSuccess={nextStep} onError={error} />}
      {step === 1 && <SignupOTP onSuccess={nextStep} onError={error} />}
      {step === 2 && <SignupDetails onSuccess={nextStep} onError={error} />}
      {step === 3 && <SignupComplete />}
    </Card>
  );
};

export default SignupCard;
