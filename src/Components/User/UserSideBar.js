import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
  return (
    <div>
     
    <div className='ParentDiv' >
    <Link to='/User/AllOrders' style={{textDecoration:'none'}}><p className='childCatg'  >إدارة الطلبات</p></Link>
    <Link to='/User/Faorite' style={{textDecoration:'none'}}><p className='childCatg' >قائمة المفضلة</p></Link>
    <Link to='/User/Adress' style={{textDecoration:'none'}}><p className='childCatg' >العناوين الشخصية </p></Link>
    <Link to='/User/profile' style={{textDecoration:'none'}}><p className='childCatg' > الملف الشخصي</p></Link>
    
    </div>



    </div>
  )
}

export default UserSideBar
