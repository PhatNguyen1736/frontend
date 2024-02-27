import React from 'react'
import { Row, Col, Container } from 'react-bootstrap' 
import products from '../products'
import Product from '../components/Product'
import Header from '../components/Header'
import Footer from '../components/Footer'
const HomeScreen = () => {
  return (
    <>
     <Header/>
        <Container>
          <Row>
              <h1>Latest Products</h1>
              {products.map(product => (
                  <Col key={product._id}sm = {12} md={6} lg={4} xl={3}>
                      <Product product={product}/>
                  </Col>
              ))}
          </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default HomeScreen