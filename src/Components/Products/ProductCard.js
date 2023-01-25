import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import image from '../../assets/Images/hoodie.png'
import favorite from '../../assets/Images/heart.png'
import star from '../../assets/Images/YellowStar.png'
import './../../Sryles/ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (

  
    
    <div className='cardProduct'>
    <Link to={'/ProductsDetalis/1'} style={{textDecoration:'none'}}>
    <img  src={image} />
    <Card.Body>
      
    <div  className='d-flex justify-content-between' style={{width:'100%'}}  >
      <Card.Text style={{fontSize:'14px',color:'grey',width:'80%'}}>
      هودي فليس بإكمام ريجلان 
            </Card.Text>
      <div>  <img src={favorite} style={{width:'20px'}} />  </div>

      </div>
     <div className='d-flex justify-content-between'>
    
     <div> <img src={star}  className='RateStarImg'/>   <span className='RateNum'> 3.2</span></div>
     <p style={{fontSize:'15px'}}> <del style={{color:'#F25379', fontSize:'12px'}}>150</del> <b>  120  SR </b>   </p> 
     
     </div>
    </Card.Body>


    </Link>
    
  </div>

  

  



    
  )
}

export default ProductCard
