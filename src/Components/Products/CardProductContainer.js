import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import CategoriesTitles from '../Utility/categoriesTitles'
import ProductCard from './ProductCard'
import './../../Sryles/ProductCard.css'
const CardProductContainer = () => {
  return (
    <Fragment>
    

   
     <Row className='ProductsContainer ' style={{backgroundColor:'whitesmoke',margin:'10px 0px' ,borderRadius:'10px',padding:'0px'}}>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>

     </Row>

      
  
      </Fragment>
  )
}

export default CardProductContainer
