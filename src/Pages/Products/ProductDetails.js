import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import ProdcutDecription from '../../Components/Products/ProdcutDecription'
import ProductImageSlider from '../../Components/Products/ProductImageSlider'
import RateContainer from '../../Components/Rate/RateContainer'

import '../../Sryles/ProductDetails.css'

const ProductDetails = () => {
  return (
    <div>
    <CategoryHeader  />

    <div   style={{paddingTop:'100px',width:'100%'}}  >
      <Row className='PageDetails'>
      
      <div className='imageSliderDeta' >
      <ProductImageSlider/>
      </div>


      <div className='ProductDecription' >
       
      <ProdcutDecription/>
     
      </div>

      <RateContainer/>
      </Row>
      </div>

    </div>
  )
}

export default ProductDetails
