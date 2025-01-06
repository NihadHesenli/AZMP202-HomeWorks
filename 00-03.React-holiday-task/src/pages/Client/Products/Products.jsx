import { useContext, useEffect, useState } from "react"
import { Row, Col } from 'antd';
import { HeartFilled, StarFilled, InfoCircleFilled, HeartOutlined } from '@ant-design/icons';
import { getAllData } from "../../../services/helpers"
import { endpoints } from "../../../services/contest"
import styles from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { FavoritestContext } from "../../../context/FavoriteContext";
import { BasketContext } from "../../../context/BasketContext";

const Products = () => {
  const [prod, setProd] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const {fav,favToggle} = useContext(FavoritestContext)
  const { addToBasket } = useContext(BasketContext)
  const navigate = useNavigate();

  const filtered = prod.filter((p) => {
    return p.title.toLowerCase().includes(search.toLocaleLowerCase().trim())
  })

  const sortedProd = filtered.toSorted((a, b) => {
    switch (sort) {
      case 'asc':
        return a.price - b.price
      case 'desc':
        return b.price - a.price
    }
  })

  const getAllProd = async () => {
    const data = await getAllData(endpoints.products)
    setProd(data)
  }

  useEffect(() => {
    getAllProd()
  }, [])

  const detailIcon = (productId) => {
    navigate(`${productId}`); 
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <div className={styles['search-bar']}>
          <input type="text" placeholder="Search Here" className="search" onChange={(e) => { setSearch(e.target.value) }} />
          <select name="price" id="sorting" onChange={(e) => { setSort(e.target.value) }}>
            <option value="default">Sort by Price Default</option>
            <option value="asc">Sort by Price ASC</option>
            <option value="desc">Sort by Price Desc</option>
          </select>
        </div>

        <Row gutter={[16, 16]} className={styles['row']}>
          {sortedProd.map((p) => (
            <Col xs={24} sm={12} md={8} key={p.id}>
              <div className={styles['prod-card']}>
                <img src={p.image} alt={p.title} width={222} />
                <h3>{p.title}</h3>
                <h4 style={{ margin: "10px 0px" }}>{p.price}$</h4>
                <div className="rate">
                  <StarFilled style={{ color: "orange" }} /> <span>{p.rating}</span>
                  {fav.find((item) => item.id === p.id) 
              ? <HeartFilled onClick={() => favToggle(p)} style={{ color: 'red',marginLeft: '7px' }} />
              : <HeartOutlined onClick={() => favToggle(p)} style={{ marginLeft: '7px'}}/>}
                  <InfoCircleFilled style={{ color: 'gray', marginLeft: '7px' }} onClick={()=> detailIcon(p.id) }/>
                </div>
                <p>{p.description}</p>
                <div className={styles['buttons']}>
                  <button className={styles['cart']} onClick={() => addToBasket(p)}>Add To Cart</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Products