import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Immage, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
const ProductScreen = ({ match }) => {

    // Tìm kiếm sản phẩm với id tương ứng
    const product = products.find((p) => p._id === match.params.id);

    if (!product) {
        return <div>Product not found</div>;
    }
  
   return (
    <> 
        <div>hahaa</div>
        <Link className='btn btn-dark my-3'to='/' > Go Back </Link> 
    </>
   )
}

export default ProductScreen