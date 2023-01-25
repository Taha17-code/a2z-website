import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import '../../Sryles/CategoryCard.css'
import clothes from '../../assets/Images/hoodie.png'
import BodyCare from '../../assets/Images/BodyCare.png'
import devices from '../../assets/Images/laptop.png'
import offers from '../../assets/Images/offers.png'

const CategoryContainer = () => {
  return (
    <Container>
      
       
    <Row className='card' >
    <CategoryCard title={'الملابس'} image={clothes} backgroundColors="#F25379"/>
    <CategoryCard title={'العناية'} image={BodyCare} backgroundColors="#ADCAF6"/>
    <CategoryCard title={'أجهزة'} image={devices} backgroundColors="#F25379"/>
    <CategoryCard title={'العروض'} image={offers} backgroundColors="#ADCAF6"/>


    <CategoryCard title={'الملابس'} image={clothes} backgroundColors="#F25379"/>
    <CategoryCard title={'العناية'} image={BodyCare} backgroundColors="#ADCAF6"/>
    <CategoryCard title={'أجهزة'} image={devices} backgroundColors="#F25379"/>
    <CategoryCard title={'العروض'} image={offers} backgroundColors="#ADCAF6"/>



    <CategoryCard title={'الملابس'} image={clothes} backgroundColors="#F25379"/>
    <CategoryCard title={'العناية'} image={BodyCare} backgroundColors="#ADCAF6"/>
    <CategoryCard title={'أجهزة'} image={devices} backgroundColors="#F25379"/>
    <CategoryCard title={'العروض'} image={offers} backgroundColors="#ADCAF6"/>

    <CategoryCard title={'الملابس'} image={clothes} backgroundColors="#F25379"/>
    <CategoryCard title={'العناية'} image={BodyCare} backgroundColors="#ADCAF6"/>
   
    </Row>
    </Container>
  )
}

export default CategoryContainer
