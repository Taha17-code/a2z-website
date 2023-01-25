import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAllOrders from '../../Components/Admin/AdminAllOrders'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import PaginationPage from '../../Components/Utility/Pagination'

const AdminAllOrdersPage = () => {
  return (
    
   
     
    <Row  style={{paddingTop:'150px'}}>
    
    <Col lg='2' md='2' sm='4' xs='5'>
    
    <AdminSideBar/>
    
    </Col>

   

    <Col lg='9' md='10' sm='8' xs='7'>
   
    <AdminAllOrders/>
 
    
    <PaginationPage/>
    
    </Col>
    
    </Row>



  )
}

export default AdminAllOrdersPage
