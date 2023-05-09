import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserAddAddress from '../../Components/User/UserAddAddress'
import UserSideBar from '../../Components/User/UserSideBar'

const UserAddAddressPage = () => {
  return (
    <Container >
    <Row  style={{paddingTop:'150px'}}>
        <Col sm="4" xs="4" md="2">
            <UserSideBar />
        </Col>

        <Col sm="8" xs="8" md="10">
          <UserAddAddress />
        </Col>
    </Row>
</Container>
  )
}

export default UserAddAddressPage
