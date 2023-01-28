
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminAddSubCategory from '../../Components/Admin/AdminAddSubCategory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
const AdminAddSubCategoryPage = () => {
  return (
    <div>
      
    <Row  style={{paddingTop:'150px'}}>
    
    <Col lg='2' md='2' sm='4' xs='5'>
    
    <AdminSideBar/>
    
    </Col>

   

    <Col lg='9' md='10' sm='8' xs='7'>
   
    <AdminAddSubCategory/>
 
    
 
    
    </Col>
    
    </Row>

    </div>
  )
}

export default AdminAddSubCategoryPage
