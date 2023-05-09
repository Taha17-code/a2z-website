import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserAdressCard = () => {
  return (
    <Container style={{backgroundColor:'white',padding:'10px',
    borderRadius:'10px',marginTop:'20px',fontSize:'12px'}}>
      
    <div style={{color:'#E40078'}} className=' d-flex justify-content-end'>
    <span style={{padding:'5px',color:'#E40078'}}>حذف</span>

    <Link to='/User/edit-address' style={{border:'none',padding:'5px'}}>
    <span  >تعديل</span>
    </Link>
    </div>
   
    <div style={{fontWeight:'bold'}}> المنزل</div>




    <div  style={{marginTop:'10px'}} >
    <span style={{fontWeight:'bold'}}>العنوان:</span>
    <span style={{color:'gray'}}>مكة المكرمة - حي الشرائع</span>
    </div>

    <div  style={{marginTop:'10px'}}>
    <span style={{fontWeight:'bold'}}>الرقم:</span>
    <span style={{color:'gray'}}>058215155  </span>
    </div>


    </Container>
  )
}

export default UserAdressCard
