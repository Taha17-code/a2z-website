import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../../Sryles/Auth.css';

const Login = () => {
  return (
    <Row className='d-flex justify-content-between  w-100' style={{paddingTop:'150px'}}>
   
      <Col style={{paddingBottom:'50px'}}>
      <div className='loginForm'>
      
      <h2> تسجيل الدخول</h2>
     <input type={'text'} placeholder='الإيميل ' />
     <input type={'text'}    placeholder='كلمة المرور '/>
     <button> تسجيل الدخول </button>
     <span> ليس لديك حساب ؟     
     
     <Link to={'/register'}>
     <span style={{color:'#E40078',cursor:'pointer'}}>إضغط هنا</span>
     </Link>
     </span>

  
     <Link to={'/Admin/AllProducts'}>
     <span style={{color:'#E40078',cursor:'pointer'}}>لوحة التحكم </span>
     </Link>
      
      </div>
      </Col>



     


    </Row>
  )
}

export default Login
