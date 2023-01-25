
import React from 'react'
import { Col, Row } from 'react-bootstrap'

import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import PaginationPage from '../../Components/Utility/Pagination'

const AdminAllProductsPage = () => {
  return (
       
    <Row  style={{paddingTop:'150px'}}>
    
    <Col lg='2' md='2' sm='4' xs='5'>
    
    <AdminSideBar/>
    
    </Col>

   

    <Col lg='10' md='10' sm='8' xs='7'>
    
    <AdminAllProducts/>
    <PaginationPage/>
    
    </Col>
    
    </Row>


  )
}

export default AdminAllProductsPage
