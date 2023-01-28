
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminAddCategory from '../../Components/Admin/AdminAddCategory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddCategoryPage = () => {
  return (
    <div>
    <Row  style={{paddingTop:'150px'}}>
    
    <Col lg='2' md='2' sm='4' xs='5'>
    
    <AdminSideBar/>
    
    </Col>

   

    <Col lg='9' md='10' sm='8' xs='7'>
   
    <AdminAddCategory/>
 
    
 
    
    </Col>
    
    </Row>
    </div>
  )
}

export default AdminAddCategoryPage
