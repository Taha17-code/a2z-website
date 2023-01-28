import React from 'react'
import { Col, Row } from 'react-bootstrap'

const AdminAddSubCategory = () => {
  return (
    <div>
      
     
    <Row className='justify-content-start'>
    
    <h3 className='  p-4'>أضف تصنيف فرعي</h3>

    <Col sm='8'>
    
 

    <input
    type='text'
    className='d-blcok mt-3 px-3 w-100'
    placeholder=' إسم التصنيف الفرعي'
    />
    
    </Col>

    </Row>



    <Row className='justify-content-start ' style={{marginTop:'20px'}}>
    
 

    <Col sm='8'>
    
    <select  className='w-100 ' name='orderCase' id='orderCase' placeholder='حالة الطلب'>
    <option> التصنيف الرئيسي </option>
    <option>ملابس </option>
    <option>أجهزة </option>
    <option> العناية</option>
    </select>

       
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

export default AdminAddSubCategory
