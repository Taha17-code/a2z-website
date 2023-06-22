import React from 'react'
import { Col, Row } from 'react-bootstrap'

const UserAddAddress = () => {
  return (
    <div>
    <Row className="justify-content-start ">
        <h2 className="admin-content-text pb-2">اضافة عنوان جديد</h2>
        <Col className='w-100'>
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                style={{width:'90%' ,border:'1px solid  #87ABDD',borderRadius:'10px'}}
            />
            <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="العنوان بالتفصيل"
                style={{width:'90%' ,border:'1px solid  #87ABDD',borderRadius:'10px'}}
            />
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="رقم الهاتف"
                style={{width:'90%' ,border:'1px solid  #87ABDD',borderRadius:'10px'}}
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 " style={{border:'none',
        backgroundColor:'#87ABDD',color:'white',padding:'5px',borderRadius:'5px',
        fontSize:'14px'}}>اضافة عنوان</button>
        </Col>
    </Row>
</div>
  )
}

export default UserAddAddress
