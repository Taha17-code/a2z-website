import React from 'react'
import { Col, Row } from 'react-bootstrap'

const PaymentComponent = () => {
  return (
    <div>
    <h4>إختر طريقة الدفع</h4>
    <div style={{backgroundColor:'white',padding:'15px'}}>
   
    <Row className='d-flex justify-cotent-between'>
    <Col  xs='12' className='d-flex  my-4'>
    <input type={'radio'} name="group" value={'cash'} id='group1'  className='mt-2'/>
    <label className='mx-2' for="group1">الدفع نقداً</label>
    </Col>
    </Row>

   

    <Row>
    <Col xs='12' className='d-flex'>
    <input type={'radio'} name="group" value={'credit'}  id='group2'  className='mt-2'/>
    <label className='mx-2' for="group2">البطاقة الإئتمانية </label>
    </Col>
    </Row>






   


    </div>
  

    <Col>

    <Row xs='12' className='d-flex justify-content-end my-4' style={{textAlign:'left'}}>
    


    <p > 300 SR</p>

    <p style={{backgroundColor:'#87ABDD',padding:'5px',
    color:'white',width:'150px',cursor:'pointer',fontSize:'15px',textAlign:'center'}}> إتمام الشراء</p>
   
   
    </Row>
    
    </Col>
    </div>
  )
}

export default PaymentComponent
