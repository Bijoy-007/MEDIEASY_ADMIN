import { useEffect, useState } from "react";
import {
  Form,
  notification,
  Row,
  Col,
  Switch,
  Select,
  Divider,
  Button,
} from "antd";

import getHospitalDetails from "../../api/getHospitalDetails";
import RoundInput from "../../component/ui/RoundInput";
import classes from "./Dashboard.module.css";
import TextArea from "antd/lib/input/TextArea";
import BedDetails from "./BedDetails";
import updateHospitalDetails from "../../api/updateHospitalDetails";

const { Item } = Form;
const { Option } = Select;

const SCHEMA = {
  hospitalName: "",
  hospitalAddress: "",
  beds: [],
  availableOperations: "",
  oxygen: "",
  blood: [],
  vaccine: [],
  helpLine: "",
  EmergencyAvailability: false,
  ambulanceAvailability: false,
};

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const vaccines = [
  "COVID19",
  "BCG",
  "OPV",
  "DPT",
  "Hepatitis B",
  "Hepatitis A",
  "Hepatitis C",
  "MMR",
  "Typhoid",
  "Varicella",
  "Chicken Pox",
];

const DetailsForm = ({ isEditing, onReadonly }) => {
  const [form] = Form.useForm();

  const [details, setDetails] = useState({ ...SCHEMA });
  const [isLoading, setIsLoading] = useState(false);

  /*
   * This effect will be called when the component is mounted and will fetch the hospital details
   */
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { ok, message, data } = await getHospitalDetails();
        if (ok) {
          setDetails((currentDetails) => ({
            ...currentDetails,
            ...data,
          }));
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

  const addHandler = (values) => {
    console.log(values);
    setDetails((currentDetails) => ({ ...currentDetails, beds: values }));
  };

  const valuesChangeHandler = (values) => {
    console.log(values);
    setDetails((currentDetails) => ({ ...currentDetails, ...values }));
  };

  const updateDetailsHandler = async () => {
    setIsLoading(true);
    try {
      const { ok, message } = updateHospitalDetails(details);
      if (ok) {
        onReadonly();
        notification.success({ message: "Successfully updated details" });
      } else {
        notification.error({ message: message });
      }
    } catch (err) {
      notification.error({ message: err.message });
    }
    setIsLoading(false);
  };

  return (
    <div className={classes["form-wrapper"]}>
      <Form
        onFinish={updateDetailsHandler}
        onValuesChange={valuesChangeHandler}
        form={form}
      >
        <Row>
          <Col xl={8} className={classes["col-wrapper"]}>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Address"
              name="hospitalAddress"
            >
              <RoundInput readOnly={true} className={classes.input} />
            </Item>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Available Oxygen"
              name="oxygen"
            >
              <RoundInput readOnly={!isEditing} className={classes.input} />
            </Item>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Hospital Name"
              name="hospitalName"
            >
              <TextArea readOnly={true} rows={1} className={classes.input} />
            </Item>
          </Col>

          <Col xl={8} className={classes["col-wrapper"]}>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Number"
              name="hospitalNumber"
            >
              <RoundInput
                readOnly={!isEditing}
                type="tel"
                className={classes.input}
              />
            </Item>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Helpline"
              name="helpline"
            >
              <RoundInput
                readOnly={!isEditing}
                type="tel"
                className={classes.input}
              />
            </Item>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Available Blood"
              name="blood"
            >
              <Select disabled={!isEditing} mode="multiple" allowClear>
                {bloodGroups.map((bloodGroup) => (
                  <Option value={bloodGroup}>{bloodGroup}</Option>
                ))}
              </Select>
            </Item>
          </Col>

          <Col xl={8} className={classes["col-wrapper"]}>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Available Vaccines"
              name="vaccine"
            >
              <Select disabled={!isEditing} mode="multiple" allowClear>
                {vaccines.map((vaccine) => (
                  <Option value={vaccine}>{vaccine}</Option>
                ))}
              </Select>
            </Item>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Emergency availability"
              name="EmergencyAvailability"
            >
              <Switch disabled={!isEditing} />
            </Item>
            <Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="Ambulance availability"
              name="ambulanceAvailability"
            >
              <Switch disabled={!isEditing} />
            </Item>
          </Col>
        </Row>
        <Divider>Bed details</Divider>
        <BedDetails isEditing={isEditing} onAdd={addHandler} />
        <div
          style={{
            textAlign: "center",
            padding: "0.8rem",
          }}
        >
          <Button
            loading={isLoading}
            htmlType="submit"
            shape="Round"
            type="primary"
            disabled={!isEditing}
          >
            Update
          </Button>
        </div>
      </Form>

      {/* <div>
        <h3>State</h3>
        <code>
          <pre>{JSON.stringify(details, null, 2)}</pre>
        </code>
      </div> */}
    </div>
  );
};

export default DetailsForm;
