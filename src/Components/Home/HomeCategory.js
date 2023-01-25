import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard.js'
import  CategoriesTitles  from '../Utility/categoriesTitles.js'
import '../../Sryles/CategoryCard.css'


import clothes from '../../assets/Images/hoodie.png'
import BodyCare from '../../assets/Images/BodyCare.png'
import devices from '../../assets/Images/laptop.png'
import offers from '../../assets/Images/offers.png'
import ProductCard from '../Products/ProductCard.js'
import CardProductContainer from '../Products/CardProductContainer.js'
import Brands from '../Brand/BrandsCard.js'
import DiscountAd from './DiscountAd.js'
import BrandsHome from '../Brand/BrandsHome.js'


const HomeCategory = () => {
  return (
    <Container >
   
      <CategoriesTitles title="التصنيفات"  moreBtn="المزيد" path={'/allCategories'}/>
    

     <Row className='card' >
      <CategoryCard title={'الملابس'} image={clothes} backgroundColors="#F25379"/>
      <CategoryCard title={'العناية'} image={BodyCare} backgroundColors="#ADCAF6"/>
      <CategoryCard title={'أجهزة'} image={devices} backgroundColors="#F25379"/>
      <CategoryCard title={'العروض'} image={offers} backgroundColors="#ADCAF6"/>
      </Row>

      <CategoriesTitles title="الأكثر مبيعاً"  moreBtn="المزيد"  path={'/Products'}/>
      <CardProductContainer/>

      <DiscountAd/>

      
      <CategoriesTitles title=" الأحدث"  moreBtn="المزيد" path={'/Products'}/>
      <CardProductContainer/>

      <CategoriesTitles title=" الماركات"  moreBtn="المزيد" path={'/allBrands'}/>

      <BrandsHome/>

 
    </Container>

  )
}

export default HomeCategory
