

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminOrderDetails from '../../Components/Admin/AdminOrderDetails'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import PaginationPage from '../../Components/Utility/Pagination'



const AdminOrderDetailsPage = () => {
  return (
         
    <Row  style={{paddingTop:'150px'}}>
    
    <Col lg='2' md='2' sm='4' xs='5'>
    
    <AdminSideBar/>
    
    </Col>

   

    <Col lg='9' md='10' sm='8' xs='7'>
   
    <AdminOrderDetails/>
 
    
  
    
    </Col>
    
    </Row>
  )
}

export default AdminOrderDetailsPage
