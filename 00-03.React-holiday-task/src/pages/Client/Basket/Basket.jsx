import { Table, Tooltip, Button, InputNumber } from "antd";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../../context/BasketContext";
import {MinusOutlined , PlusOutlined} from '@ant-design/icons'

const Basket = () => {
  const {
    basket,
    removeBasketItem,
    increaseBasketCount,
    decreaseBasketCount,
    clearBasket,
    calculateTotalPrice,
  } = useContext(BasketContext);

  const columns = [
    {
      title: "Photo",
      dataIndex: "image",
      key: "image",
      render: (img) => <img src={img} alt="Product" width="100" />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Button type="primary" danger onClick={() => decreaseBasketCount(record.id)}><MinusOutlined /></Button>
          <InputNumber value={quantity} readOnly />
          <Button type='primary' danger onClick={() => increaseBasketCount(record.id)}><PlusOutlined /></Button>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => {
        const description = text || "No description available";
        return (
          <Tooltip title={description} color="black">
            {description.length > 50
              ? `${description.slice(0, 50)}...`
              : description}
          </Tooltip>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          type="primary"
          danger
          onClick={() => removeBasketItem(record.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div style={{ padding: "20px" }}>
        <h1>Basket</h1>
        <Table
          columns={columns}
          dataSource={basket}
          onChange={onChange}
          pagination={{ pageSize: 5 }}
          rowKey="id"
        />
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <h2>Total Price: ${calculateTotalPrice()}</h2>
          <Button type="primary" danger onClick={clearBasket}>
            Clear Basket
          </Button>
        </div>
      </div>
    </>
  );
};

export default Basket;

