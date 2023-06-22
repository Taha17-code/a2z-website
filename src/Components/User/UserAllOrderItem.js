import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

const UserAllOrderItem = () => {
  return (
    <div>
    <Col sm='10'  style={{backgroundColor:'white',marginTop:'25px',padding:'10px'}}>
     
    <Row > <p style={{fontWeight:'bold'}}>طلب رقم#12332</p></Row>




    <UserAllOrderCard/>
    <UserAllOrderCard/>
    <UserAllOrderCard/>
    




    
   <Row className=' d-flex justify-content-between w-100'>

   <Col >
   <span style={{color:'gray',fontSize:'12px',fontWeight:'bold'}}>الحالة:</span>
   <span style={{fontSize:'12px',color:'#F25379',fontWeight:'bold'}}>قيد التنفيذ</span>
   </Col>

   <Col  className='  align-items-left '>
     <div>  <span  > 150 ريال </span></div>
   </Col>



   </Row>

    </Col>
    </div>
  )
}

export default UserAllOrderItem
