import React, { Fragment, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import CategoryCard from '../../Components/Category/CategoryCard'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import PaginationPage from '../../Components/Utility/Pagination'
import AllCategoryHook from '../../custom_hooks/categoryHooks/AllCategoryHook'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllCategory,getAllCategoryPage } from '../../Redux/Actions/categoryAction'


const AllCategoryPage = () => {
 
  const [category,loading,numPageCounts,getPage]=AllCategoryHook()

  return (
    <div style={{paddingTop:'150px'}}>
    <CategoryContainer data={category} loading={loading}/>


    {
      numPageCounts>1?<PaginationPage numPageCounts={numPageCounts} onPress={getPage}/>:null
    }
    

    </div>
  )
}

export default AllCategoryPage
