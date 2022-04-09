import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import AddBedModal from "../../component/dashboard/AddBedModal";

const BedDetails = ({ onAdd, isEditing }) => {
  const [bed, setBed] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onAdd(bed);
    // eslint-disable-next-line
  }, [bed]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOk = (values) => {
    closeModal();
    console.log(values);
    setBed([...bed, { ...values, index: bed.length }]);
  };

  const deleteBedHandler = (index) => {
    setBed(bed.filter((bed) => bed.index !== index));
  };

  const columns = [
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "Vacancy",
      key: "vacancy",
      dataIndex: "vacancy",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "index",
      render: (record) => (
        <Button
          onClick={deleteBedHandler.bind(this, record)}
          type="primary"
          shape="circle"
          disabled={!isEditing}
        >
          -
        </Button>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          textAlign: "right",
        }}
      >
        <Button
          style={{
            marginBottom: "10px",
          }}
          onClick={openModal}
          shape="round"
          type="primary"
          disabled={!isEditing}
        >
          Add Bed
        </Button>
        <Table
          pagination={{ defaultPageSize: 20, hideOnSinglePage: true }}
          columns={columns}
          dataSource={bed}
        />
      </div>
      {isOpen && <AddBedModal onCancel={closeModal} onOk={handleOk} />}
    </>
  );
};

export default BedDetails;
