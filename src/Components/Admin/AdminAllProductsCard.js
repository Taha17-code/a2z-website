
import React from 'react'
import { Card } from 'react-bootstrap'

import '../../Sryles/ProductCard.css'
import image from '../../assets/Images/hoodie.png'
import star from '../../assets/Images/YellowStar.png'
import rabbish from '../../assets/Images/trash.png'



const AdminAllProductsCard = () => {
  return (
    <div className='cardProduct'>
   

    <Card.Body  style={{padding:'10px',width:'100%'}}>

    <div className='d-flex justify-content-between'  style={{padding:'10px',width:'100%'}}>
    <div style={{width:'20px',cursor:'pointer'}}> <img src={rabbish} style={{width:'100%'}} /> </div>

    <div style={{fontSize:'12px',color:'lightgray',cursor:'pointer'}}> تعديل </div>
    </div>


    <div><img  src={image} /></div>


    <div  className='d-flex justify-content-between' style={{width:'100%'}}  >
      <Card.Text style={{fontSize:'14px',color:'grey',width:'80%'}}>
      هودي فليس بإكمام ريجلان 
            </Card.Text>


      </div>
     <div className='d-flex justify-content-between'>
    
     <div> <img src={star}  className='RateStarImg'/>   <span className='RateNum'> 3.2</span></div>
     <p style={{fontSize:'15px'}}> <del style={{color:'#F25379', fontSize:'12px'}}>150</del> <b>  120  SR </b>   </p> 
     
     </div>
    </Card.Body>



    
  </div>

  )
}

export default AdminAllProductsCard
