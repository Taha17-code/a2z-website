import React from 'react'
import {  Container } from 'react-bootstrap'

import AdminAllOrderItem from './AdminAllOrderItem'
const AdminAllOrders = () => {
  return (

    <div>
    <h3>إدارة الطلبات</h3>
     <AdminAllOrderItem/>
     <AdminAllOrderItem/>
     <AdminAllOrderItem/>
     <AdminAllOrderItem/>


  </div>
  )
}

export default AdminAllOrders
