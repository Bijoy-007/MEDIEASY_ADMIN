import { Form, Modal, Select, Button } from "antd";

import RoundInput from "../ui/RoundInput";

const { Option } = Select;

const BedTypes = ["ICU", "CCU", "HCU", "ICCU", "COVID", "General"];

const AddBedModal = (props) => {
  const [form] = Form.useForm();

  const okHandler = (values) => {
    props.onOk(values);
  };

  return (
    <Modal
      visible={true}
      title="Add Bed"
      onOk={okHandler}
      onCancel={props.onCancel}
      footer={null}
    >
      <Form
        style={{
          textAlign: "center",
        }}
        form={form}
        onFinish={okHandler}
      >
        <Form.Item label="Bed type" name="type">
          <Select>
            {BedTypes.map((type) => (
              <Option value={type}>{type}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Vacancy" name="vacancy">
          <RoundInput type="number" />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Add
        </Button>
      </Form>
    </Modal>
  );
};

export default AddBedModal;
