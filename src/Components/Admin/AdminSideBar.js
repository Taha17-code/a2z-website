import React from 'react'
import { Link } from 'react-router-dom'

import '../../Sryles/ADmin/AdminSidebar.css'

const AdminSideBar = () => {
  return (
  
    <div className='ParentDiv' >
    <Link to='/Admin/AllOrders' style={{textDecoration:'none'}}><p className='childCatg'  >إدارة الطلبات</p></Link>
    <Link to='/Admin/AllProducts' style={{textDecoration:'none'}}><p className='childCatg' >إدارة المنتجات</p></Link>
    <Link to='/Admin/AddBrand' style={{textDecoration:'none'}}><p className='childCatg' >إضافة براند </p></Link>
    <Link to='/Admin/AllProducts' style={{textDecoration:'none'}}><p className='childCatg' > إضافة تصنيف</p></Link>
    <Link to='/Admin/AllProducts' style={{textDecoration:'none'}}><p className='childCatg' > إضافة تصنيف فرعي</p></Link>
    <Link to='/Admin/AllProducts' style={{textDecoration:'none'}}><p className='childCatg' > إضافة  منتج</p></Link>
    </div>
  )
}

export default AdminSideBar
