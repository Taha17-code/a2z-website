import React from 'react'
import AllBrandsContatiner from '../../Components/Brand/AllBrands'
import PaginationPage from '../../Components/Utility/Pagination'


const BrandsPage = () => {
  return (
    <div style={{paddingTop:'150px'}}>
      <AllBrandsContatiner/>
      <PaginationPage/>
    </div>
  )
}

export default BrandsPage
