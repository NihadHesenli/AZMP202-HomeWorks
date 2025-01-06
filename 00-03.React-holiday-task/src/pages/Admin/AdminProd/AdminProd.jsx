import { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import { endpoints } from '../../../services/contest'
import { getAllData, deleteDataById, editDataById } from '../../../services/helpers';
import styles from './index.module.scss'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const columns = (deleteButton,handleEdit) => [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: 'Photo',
    dataIndex: 'image',
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
          onClick={() => deleteButton(prod.id)}
        >
          Delete
        </button>
        <button
          type="link"
          className={styles['edit']}
          onClick={()=>{handleEdit(prod)}}>
          Edit
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

  const deleteButton = async (id) => {
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
        await deleteDataById(endpoints.products, id); 
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
  
  const handleEdit = (product) => {
    Swal.fire({
      title: 'Edit Vinyl Info',
      html: `
        <input type="text" id="swal-title" class="swal2-input" value="${product.title}" placeholder="Title" />
        <input type="text" id="swal-description" class="swal2-input" value="${product.description}" placeholder="Description" />
        <input type="text" id="swal-price" class="swal2-input" value="${product.price}" placeholder="Price" />
        <input type="text" id="swal-image" class="swal2-input" value="${product.image}" placeholder="Image URL" />
        <input type="text" id="swal-rating" class="swal2-input" value="${product.rating}" placeholder="Rating" min="0" max="5" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'OK',
      preConfirm: async () => {
        const title = document.getElementById('swal-title').value;
        const description = document.getElementById('swal-description').value;
        const price = document.getElementById('swal-price').value;
        const image = document.getElementById('swal-image').value;
        const rating = document.getElementById('swal-rating').value;

        const updatedProduct = { 
          ...product, 
          title, 
          description, 
          price, 
          image, 
          rating, 
        };

        try {
          await editDataById('products', updatedProduct.id, updatedProduct);
          setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
          Swal.fire('Changed Successfully!', 'Vinyl Info has been updated.', 'success');
        } catch (error) {
          console.log(error);
          
        }
      }
    });
  };

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Admin Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div id="admin-products">
      <div className="container">
        <div className="admin-products">
          <Table
            columns={columns(deleteButton,handleEdit)}
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