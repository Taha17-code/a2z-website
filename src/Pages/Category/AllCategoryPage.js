import React, { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import CategoryCard from '../../Components/Category/CategoryCard'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import PaginationPage from '../../Components/Utility/Pagination'

const AllCategoryPage = () => {
  return (
    <div style={{paddingTop:'150px'}}>
    <CategoryContainer/>
    <PaginationPage/>

    </div>
  )
}

export default AllCategoryPage
