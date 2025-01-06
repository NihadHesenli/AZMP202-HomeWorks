/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDataById } from '../../../services/helpers'
import {Col, Row, Button, Typography } from "antd";
import { StarFilled } from '@ant-design/icons';
import { endpoints } from '../../../services/contest'
const { Title, Text } = Typography;


const Details = () => {
  const [prod,setProd]= useState([])
  const { id } = useParams()
  const back = useNavigate()


  const getAllProd = async()=>{
    const data = await getDataById(endpoints.products,id)
    setProd(data)
  }

  useEffect(() => {

    getAllProd()

  }, [id])
  

  return (
    <>
    <div style={{ padding: '20px' }}>
      <Row gutter={16} style={{display: 'flex', justifyContent: 'center',alignContent: 'center',margin:'0 auto'}}>
        <Col xs={24} sm={12} md={8} lg={6}>
        <img src={prod.image} alt="" width={350}/>
        </Col>
        <Col xs={24} sm={12} md={16} lg={10}>
          <div >
          <Title level={3}>{prod.title}</Title>
          <StarFilled style={{ color: "orange", margin: '0 0 20px 0'}} /> <span>{prod.rating}</span>
            <Title strong style={{ fontSize: '18px' }}>
                ${prod.price}
              </Title>
            <Title level={2}>Product Description</Title>
            <Text>{prod.description}</Text>
            <Title>
            <Button onClick={()=>{back(-1)}}>Back</Button>
            </Title>
          </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Details