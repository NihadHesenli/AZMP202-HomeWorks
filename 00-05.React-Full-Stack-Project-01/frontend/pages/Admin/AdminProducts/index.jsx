import { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import { endpoints } from '../../../services/base'
import { getAllData, deleteDataById } from '../../../services/helpers';
import styles from './index.module.scss'
import Swal from 'sweetalert2';


const columns = (deleteButton) => [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: 'Photo',
    dataIndex: 'image_Url',
    render: (img) => {
      return <img src={img} alt="" width={'100'} />
    }
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    render: (text) => (
      <Tooltip title={text} color={"black"} key={"black"}>
        {text.slice(0, 50)}...
      </Tooltip>
    ),
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    sorter: (a, b) => a.price - b.price
  },
  {
    title: 'Actions',
    render: (_, prod) => (
      <div>
        <button
          type="link"
          className={styles['delete']}
          onClick={() => deleteButton(prod._id)}
        >
          Delete
        </button>
      </div>
    )

  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const AdminProd = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const res = await getAllData(endpoints.products)
    setProducts(res)
  }

  const deleteButton = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        await deleteDataById(endpoints.products, _id); 
        await getAllProducts(); 
        await Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while deleting the file.",
          icon: "error",
        });
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>

    <div id="admin-products">
      <div className="container">
        <div className="admin-products">
          <Table
            columns={columns(deleteButton)}
            dataSource={products}
            onChange={onChange}
            showSorterTooltip={{
              target: "sorter-icon",
            }}
            rowKey={"id"}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminProd