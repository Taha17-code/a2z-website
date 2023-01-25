import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../Sryles/Auth.css';


const Regsteration = () => {
  return (
    <Col style={{paddingTop:'150px'}}>
    <div className='loginForm'>
    
    <h2> تسجيل جديد</h2>
   <input type={'text'}  placeholder='الإسم ' />
   <input type={'text'}  placeholder='الإيميل ' />
   <input type={'text'}   placeholder='كلمة المرور '/>
   <input type={'text'}  placeholder='تأكيد كلمة المرور '/>
  
   <button> تسجيل  </button>
   

    
    </div>
    </Col>
  )
}

export default Regsteration
