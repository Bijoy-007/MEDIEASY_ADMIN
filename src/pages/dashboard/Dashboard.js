import { useState } from "react";
import { Button, Row, Col } from "antd";

import Layout from "../../layout/Layout";
import classes from "./Dashboard.module.css";
import DetailsForm from "./DetailsForm";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Layout>
      <div className={classes.wrapper}>
        <Row>
          <Col className={classes["label-wrapper"]} span={12}>
            Hospital Details
          </Col>
          <Col span={12}>
            <div className={classes["btn-div"]}>
              {!isEditing ? (
                <Button
                  onClick={() => {
                    setIsEditing(true);
                  }}
                  type="primary"
                  size="medium"
                  shape="round"
                >
                  Edit
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setIsEditing(false);
                  }}
                  type="ghost"
                  size="medium"
                  shape="round"
                >
                  Cancel
                </Button>
              )}
            </div>
          </Col>
          <DetailsForm onReadonly={() => {
            setIsEditing(false);
          }} isEditing={isEditing} />
        </Row>
      </div>
    </Layout>
  );
};

export default Home;
