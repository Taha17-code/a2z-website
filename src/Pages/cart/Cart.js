import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from '../../Components/Cart/CartItem'
import '../../Sryles/Cart.css'

const Cart = () => {
  return (
    <Container style={{paddingTop:'150px'}}>
   
     <Row>
     <h3> عربة التسوق</h3>
     </Row>

    
     <Row className='d-flex justify-content-center'>
     
     <Col xs='12'  md='8' lg='8'>

  
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
  

     </Col>

     <Col xs='12' md='4' lg='4' >
     
    <div className='ConponBox' style={{marginTop:'20px'}}>
     
    <p >كود الخصم</p>
     <input type={'text'}  placeholder='أدخل كود الخصم' style={{fontSize:'12px'}}/>
     <sapn style={{fontSize:'12px',cursor:'pointer'}}> تفعيل </sapn>


     <div className='d-flex justify-content-between' style={{marginTop:'30px'}}>

     <div>
     <p>الإجمالي</p>
     <p>بعد الخصم</p>
     </div>

     <div>
     <p>255 SR</p>
     <p> 200 SR</p>
     
     
     </div>
     
     </div>


    <Link to='/payment'><button className='buyButton'> إتمام الشراء</button></Link>

     
    </div>
     </Col>
  
     </Row>


    </Container>
  )
}

export default Cart
