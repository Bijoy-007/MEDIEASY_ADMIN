import { Input } from "antd";

const RoundInput = (props) => {
  return (
    <Input
      {...props}
      style={{
        ...props.style,
        borderRadius: "50px",
      }}
    />
  );
};

export default RoundInput;
