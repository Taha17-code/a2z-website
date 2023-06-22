import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserProfile from '../../Components/User/UserProfile'
import UserSideBar from '../../Components/User/UserSideBar'

const UserProfilePage = () => {
  return (
    <Container>
     

   
    <Row  style={{paddingTop:'150px'}}>
    
    <Col lg='2' md='2' sm='4' xs='5'>
    
    <UserSideBar/>
    
    </Col>

   

    <Col lg='10' md='10' sm='8' xs='7'>
   
    <UserProfile/>
 
    
   
    
    </Col>
    
    </Row>

    </Container>
  )
}

export default UserProfilePage
