import React, { Fragment } from 'react'
import { Col ,Row} from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import ProductCard from '../../Components/Products/ProductCard'
import CategoriesTitles from '../../Components/Utility/categoriesTitles'
import PaginationPage from '../../Components/Utility/Pagination'
import ProductsTitles from '../../Components/Utility/ProductsTitles'
import SideFilter from '../../Components/Utility/SideFilter'

const ShopProductPage = () => {

 
  return ( 
    <Fragment>
    <CategoryHeader  />
    <div style={{paddingTop:'70px',margin:'20px'}}>
    


    <ProductsTitles title=" منتج  1 "   path={'/Products'} />

    <Row>
   

      <Col sm='4' xs='4' md='2' >
      <SideFilter/>
      </Col>

      <Col sm='8' xs='8' md='10'>
     <Row className='justify-content-center m-0'>
     
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     </Row>
      </Col>
    </Row>


    <PaginationPage/>
    
 
    </div>
    </Fragment>
  )
}

export default ShopProductPage
