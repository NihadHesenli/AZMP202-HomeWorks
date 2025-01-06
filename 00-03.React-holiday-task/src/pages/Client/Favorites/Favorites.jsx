import { Helmet } from "react-helmet-async"
import { useContext } from 'react'
import {FavoritestContext } from '../../../context/FavoriteContext'
import { HeartFilled, StarFilled, InfoCircleFilled, HeartOutlined } from '@ant-design/icons';
import { Button, Col, Row } from "antd"
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../../../context/BasketContext";

const Favorites = () => {
  const {fav,favToggle,clearAllFav} = useContext(FavoritestContext)
  const {addToBasket} = useContext(BasketContext)
  const navigate = useNavigate();

  const detailIcon = (productId) => {
    navigate(`${productId}`); 
  };

  
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Favorites</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container">
            <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: 0 }}>Your Favorites</h2>
          {fav.length > 0 && (
            <Button type="primary" danger onClick={()=>{clearAllFav()}} style={{margin: '10px 30px 0 0'}}>
              Clear All Favorites
            </Button>
          )}
        </div>
       <Row gutter={[16, 16]} className={styles['row']}>
        {fav.map((p)=>{
          return (
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
                <button className={styles['cart']} onClick={()=> addToBasket(p)}>Add To Cart</button>
              </div>
            </div>
          </Col>
          )
        })}
        </Row>
      </div>
    </>
  )
}

export default Favorites