import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = () => {
  return (
    <div>
    <h3>إدارة المنتجات</h3>
    <Row className='justify-content-center'>
      <AdminAllProductsCard/>
      <AdminAllProductsCard/>
      <AdminAllProductsCard/>
      <AdminAllProductsCard/>
      <AdminAllProductsCard/>
      <AdminAllProductsCard/>
      <AdminAllProductsCard/>
      <AdminAllProductsCard/>
    </Row>

    </div>
  )
}

export default AdminAllProducts
