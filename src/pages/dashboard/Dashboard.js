import { Button, Row, Col } from "antd";
import Layout from "../../layout/Layout";

import classes from "./Dashboard.module.css";
import DetailsForm from "./DetailsForm";

const Home = () => {
  return (
    <Layout>
      <div className={classes.wrapper}>
        <Row>
          <Col className={classes["label-wrapper"]} span={12}>
            Hospital Details
          </Col>
          <Col span={12}>
            <div className={classes["btn-div"]}>
              <Button type="primary" size="medium" shape="round">
                Edit
              </Button>
            </div>
          </Col>
          <DetailsForm />
        </Row>
      </div>
    </Layout>
  );
};

export default Home;
