import React from 'react'
import { Container, Row } from 'react-bootstrap'

import '../../Sryles/CategoryHeader.css'

const CategoryHeader = () => {
  return (
    <div className='cat-header' style={{backgroundColor:'white',top:'100px',position:'sticky',
    width:'100%',zIndex:'1'}}>
      
    <Container>
    
    <Row>
    
    <div className='d-flex justify-content-start py-2   flex-wrap' style={{boxSizing:'border-box'}}  >

    <div className='cat-text-header px-2 LiSubHeader'>الكل</div>
    <div className='cat-text-header px-2 LiSubHeader'>الكترونيات</div>
    <div className='cat-text-header px-2 LiSubHeader'>ملابس</div>
    <div className='cat-text-header px-2 LiSubHeader'>عناية</div>
    <div className='cat-text-header px-2 LiSubHeader'>تخفيضات</div>
    <div className='cat-text-header px-2 LiSubHeader'>المزيد</div>


    <div className='cat-text-header px-2 LiSubHeader'>الكل</div>
    <div className='cat-text-header px-2 LiSubHeader'>الكترونيات</div>
    <div className='cat-text-header px-2 LiSubHeader'>ملابس</div>
    <div className='cat-text-header px-2 LiSubHeader'>عناية</div>
    <div className='cat-text-header px-2 LiSubHeader'>تخفيضات</div>
    <div className='cat-text-header px-2 LiSubHeader'>المزيد</div>




    
    </div>
    
    
    </Row>
    
    
    </Container>


    </div>
  )
}

export default CategoryHeader
