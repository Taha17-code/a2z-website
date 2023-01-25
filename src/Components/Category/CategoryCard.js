import React from 'react'
import { Col } from 'react-bootstrap'
import '../../Sryles/CategoryCard.css'
const CategoryCard = ({title,image,backgroundColors}) => {
  return (
    
   
   <div  className='childCard '  >
   <div className='itemsArrange'>
   <div style={{backgroundColor:backgroundColors}}>
<img src={image} />
</div>
<p >{title}</p>
   </div>
   
 
   </div>
  )
}

export default CategoryCard
