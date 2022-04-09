import { useEffect, useState } from "react";
import { Form, notification, Row, Col } from "antd";

import getHospitalDetails from "../../api/getHospitalDetails";
import RoundInput from "../../component/ui/RoundInput";
import classes from "./Dashboard.module.css";
import TextArea from "antd/lib/input/TextArea";

const { Item } = Form;

const DetailsForm = () => {
  const [form] = Form.useForm();

  const [details, setDetails] = useState({});

  /*
   * This effect will be called when the component is mounted and will fetch the hospital details
   */
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { ok, message, data } = await getHospitalDetails();
        if (ok) {
          setDetails(data);
          form.setFieldsValue({
            ...data,
          });
        } else {
          notification.error({ message: message });
        }
      } catch (err) {
        notification.error({ message: err.message });
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className={classes["form-wrapper"]}>
      <Form form={form}>
        <Row>
          <Col xl={12}>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Hospital Name"
              name="hospitalName"
            >
              <TextArea className={classes.input} />
            </Item>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Address"
              name="hospitalAddress"
            >
              <RoundInput className={classes.input} />
            </Item>
          </Col>
          <Col xl={12}></Col>
        </Row>
      </Form>
    </div>
  );
};

export default DetailsForm;
