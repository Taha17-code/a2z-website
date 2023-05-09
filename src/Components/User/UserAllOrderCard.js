import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import laptop from '../../assets/Images/blackHoodi.png'
const UserAllOrderCard = () => {
  return (
    <div style={{margin:'5px'}}>
      
  
   


    <Row  className='justify-content-between w-100'>
    <Col xs='10' md='4'> <img src={laptop} width='100%'/></Col>


    <Col xs='10' md='6'> 
    
    <p style={{color:'gray',fontSize:'12px'}}>لاب توب ديل معالج كور اي  تسعة  و مساحة تخزين واحد تيرا بايت</p>

    <span style={{fontSize:'12px',fontWeight:'bold',margin:'5px'}}> أحمر</span>
    <span className='RateNum' style={{fontSize:'12px',fontWeight:'bold',margin:'5px'}}> 4.5</span>
    <span style={{fontSize:'12px',fontWeight:'bold',margin:'5px'}}> 150 تقييم</span>

    <div>
    <span>الكمية</span>
    <input
    className='mx-2'
    style={{width:'40px',height:'25px'}}
    />

    </div>
    
    </Col>
    </Row>

    
    


    </div>
  )
}

export default UserAllOrderCard
