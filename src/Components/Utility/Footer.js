import React from 'react'
import { Row ,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <Row className='d-flex justify-content-between w-100 p-2 m-0' style={{backgroundColor:'white',
  borderTop:'1px solid #F25379',marginTop:'20px'}}>
      
    <Col>
    <p style={{ margin:'5px'}}>الشروط و الأحكام</p>
    <p style={{ margin:'5px'}}> سياسة الخصوصية </p>
    <p style={{ margin:'5px'}}> اتصل بنا  </p>
    </Col>
    
    <Col >
    <p> حسابات التواصل الاجتماعي</p>
    <p style={{display:'inline', margin:'5px'}}>تويتر</p>
    <p style={{display:'inline', margin:'5px'}}>إنستغرام</p>
    <p style={{display:'inline', margin:'5px'}}>واتس اب</p>
    </Col>



    <Col >
    <p>مركز المساعدة</p>
    <p>help.a2z.com</p>
    </Col>

  
    </Row>
  )
}

export default Footer
