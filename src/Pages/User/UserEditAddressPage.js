import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserEditAddress from '../../Components/User/UserEditAddress'
import UserSideBar from '../../Components/User/UserSideBar'

const UserEditAddressPage = () => {
  return (
    <Container >
            <Row  style={{paddingTop:'150px'}}>
                <Col sm="4" xs="4" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="8" xs="8" md="10">
                  <UserEditAddress />
                </Col>
            </Row>
        </Container>
  )
}

export default UserEditAddressPage
