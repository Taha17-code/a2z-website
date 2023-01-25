import React from 'react'
import dicount from '../../assets/Images/laptop.png'
const DiscountAd = () => {
  return (
    <div>

      <div className='d-flex justify-content-between w-100 ' style={{maxHeight:'200px',backgroundColor:'#E7F0FF'
    ,borderRadius:'10px',padding:'15px',alignItems:'center',margin:'10px'}}>

 

  <div> 
  <h3>50% خصم لليوم الوطني</h3>
  </div>

  <div style={{width:'150px',textAlign:'center',boxSizing:'border-box'}}>
  <img src={dicount} style={{width:'150px'}}/>
  </div>

      </div>


    </div>
  )
}

export default DiscountAd
