import React from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from'../../assets/Images/AddImg.png'
const AdminAddCategory = () => {
  return (
    <div>
      

    <Row className='justify-content-start'>
    
    <h3 className='  p-4'>أضف تصنيف جديد</h3>


    <Col sm='8'>
    
    <p style={{color:'lightgray'}}>صورة التصنيف</p>
    <img src={avatar} alt='تصنيف' height='100px' width='120px'/>

    <input
    type='text'
    className='d-blcok mt-3 px-3 w-100'
    placeholder='إسم التصنيف'
    />
    
    </Col>

    </Row>





    <Row>
    
    <Col className='d-flex justify-content-end'>

    <button className=' d-inline mt-2' style={{
        textDecoration:'none',
        backgroundColor:'#87ABDD',
        color:'whitesmoke',
        border:'none',
        marginRight:'10px'
    }}> حفظ التعديلات</button>
    
    </Col>
    
    </Row>
    </div>
  )
}

export default AdminAddCategory
