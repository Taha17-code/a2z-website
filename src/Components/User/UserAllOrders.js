import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'


const UserAllOrders = () => {
  return (
    <div>
    <Row  >
    
    <h3 className='  p-4'>  أهلا طه الحداد</h3>


    <UserAllOrderItem/>
    <UserAllOrderItem/>
    <UserAllOrderItem/>

    </Row>
    </div>
  )
}

export default UserAllOrders
