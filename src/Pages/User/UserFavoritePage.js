import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserFvoriteItems from '../../Components/User/UserFvoriteItems'

import UserSideBar from '../../Components/User/UserSideBar'
import PaginationPage from '../../Components/Utility/Pagination'

const UserFavoritePage = () => {
  return (
    <Container>
     

   
    <Row  style={{paddingTop:'150px'}}>
    
    <Col lg='2' md='2' sm='4' xs='5'>
    
    <UserSideBar/>
    
    </Col>

   

    <Col lg='10' md='10' sm='8' xs='7'>
   
    <UserFvoriteItems/>
 
    
   
    
    </Col>
    
    </Row>

    </Container>
  )
}

export default UserFavoritePage
