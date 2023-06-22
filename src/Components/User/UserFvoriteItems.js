import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PaginationPage from '../Utility/Pagination'
import UserFavoriteCard from './UserFavoriteCard'

const UserFvoriteItems = () => {
  return (
    <div>
    <h2>قائمة المفضلة</h2>

 <Col className='d-flex flex-wrap'>
 <UserFavoriteCard/>
 <UserFavoriteCard/>
 <UserFavoriteCard/>
 <UserFavoriteCard/>
 <UserFavoriteCard/>
 <UserFavoriteCard/>
 <UserFavoriteCard/>
 
 </Col>
      
 <PaginationPage/>
    </div>
  )
}

export default UserFvoriteItems
