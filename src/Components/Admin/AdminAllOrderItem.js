import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import hoodi from '../../assets/Images/blackHoodi.png'
import trash from '../../assets/Images/trash.png'


const AdminAllOrderItem = () => {
  return (
    <Container>
    <Link to='/Admin/orders/20' style={{textDecoration:'none'}}>
    
    <Row className='CartContainer   w-100'  style={{marginTop:'20px'}}>
    
    <Col className='productCartImgPP'>
    <img src={hoodi} className='productCartImg' />
    </Col>


    <Col >
    <div> 
    <p  style={{color:'lightgrey',fontSize:'12px',fontWeight:'bold'}}>طلب رقم #12224</p>
    <p style={{fontSize:'12px'}}> هودي فليس بإكمام ريجلان  شتوي  من شركة LFL</p>
    </div>


    <div style={{marginBottom:'15px'}}>
    <span style={{fontWeight:'bold',fontSize:'14px'}}>الماركة:</span>
    <span style={{fontSize:'14px'}}>LFL</span>
    
    </div>



   
   <div className='ProductColors' style={{backgroundColor:'black',borderRadius:'100%'}}></div>

   


   <div style={{marginBottom:'15px'}}>
   <span style={{fontWeight:'bold',fontSize:'14px'}}>الكمية :</span>
   <span style={{fontSize:'14px'}}><input type={'number'}  style={{width:'60px'}} /> </span>
   
   </div>


    </Col>






    <Col className='w-100 Delet-Price' >
    <div style={{color:'lightgray',cursor:'pointer'}}>تعديل </div>
    <div><img src={trash} style={{width:'20px',cursor:'pointer'}}/></div>

    </Col>


   
  </Row>
 



  
  </Link>
  </Container>
  )
}

export default AdminAllOrderItem
