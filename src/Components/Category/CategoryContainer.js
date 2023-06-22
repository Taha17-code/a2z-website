import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import '../../Sryles/CategoryCard.css'
import clothes from '../../assets/Images/hoodie.png'
import BodyCare from '../../assets/Images/BodyCare.png'
import devices from '../../assets/Images/laptop.png'
import offers from '../../assets/Images/offers.png'
import { useDispatch, useSelector } from 'react-redux'


const CategoryContainer = ({data,loading}) => {

  const colors=['#87ABDD','#ADCAF6','#F25379','#E40078']
  return (
    
    <Container>
      
       
    <Row className='card' >
    {
      loading==false?(

        data?(data.map((item,index)=>{
          return(<CategoryCard key={index} title={item.name} image={item.image} backgroundColors={colors[Math.floor(Math.random()*3)+1]}/>)
        })):
        <h6>لاتوجد تصنيفات..</h6>

        ):<h6>لاتوجد تصنيفات..</h6>

    }
    

   
    </Row>
    </Container>
  )
}

export default CategoryContainer
