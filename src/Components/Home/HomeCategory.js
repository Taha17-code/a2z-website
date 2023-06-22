import React, { Fragment, useEffect } from 'react'
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

import HomeCategroiesHook from '../../custom_hooks/categoryHooks/HomeCategroiesHook.js'

const HomeCategory = () => {

   const [category,loading,colors]=HomeCategroiesHook();

  return (
    <Container >
   
      <CategoriesTitles title="التصنيفات"  moreBtn="المزيد" path={'/allCategories'}/>
    

     <Row className='card' >
    
     {
     loading==false?(category?(
       
        category.slice(0,5).map((item,index)=>{return (<CategoryCard  key={index} title={item.name} image={item.image} backgroundColors={colors[index]}/>)})
      ):( 
        
        <Fragment>
      <CategoryCard title={'الملابس'} image={clothes} backgroundColors="#F25379"/>      
     <CategoryCard title={'العناية'} image={BodyCare} backgroundColors="#ADCAF6"/>
     <CategoryCard title={'أجهزة'} image={devices} backgroundColors="#F25379"/>
     <CategoryCard title={'العروض'} image={offers} backgroundColors="#ADCAF6"/>
     </Fragment>
     )):<h6>تأكد من اتصالك بالانترنت ...</h6>
      

     }

    
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
