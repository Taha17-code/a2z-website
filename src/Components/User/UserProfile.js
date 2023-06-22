import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <Container className='w-100'>

     <div style={{backgroundColor:'white',padding:'10px',
     borderRadius:'10px',marginTop:'20px',fontSize:'12px'}}>

    <div style={{color:'#E40078'}} className=' d-flex justify-content-end'>

    <Link to='/User/edit-address' style={{border:'none',padding:'5px'}}>
    <span  >تعديل</span>
    </Link>
    </div>
   

    <div  style={{marginTop:'10px'}} >
    <span style={{fontWeight:'bold'}}>الإسم:</span>
    <span style={{color:'gray'}}>  طه أحمد الحداد</span>
    </div>



    <div  style={{marginTop:'10px'}} >
    <span style={{fontWeight:'bold'}}>العنوان:</span>
    <span style={{color:'gray'}}>مكة المكرمة - حي الشرائع</span>
    </div>

    <div  style={{marginTop:'10px'}}>
    <span style={{fontWeight:'bold'}}>الرقم:</span>
    <span style={{color:'gray'}}>058215155  </span>
    </div>

    </div>
    
    
    <div style={{marginTop:'50px' }}>
    <h3>تغيير كلمة المرور</h3>
    <input  
    placeholder='كلمة المرور'
    style={{width:'90%' ,border:'1px solid  #87ABDD',borderRadius:'10px',marginTop:'15px'}}
    name=''
    width={'80%'}
    />
    <input  
    placeholder=' تأكيد كلمة المرور'
    style={{width:'90%' ,border:'1px solid  #87ABDD',borderRadius:'10px',marginTop:'15px'}}
    name=''
    width={'80%'}
    />

    <div className='w-100 d-flex -justify-content-end' >
    <button   style={{border:'none',
    backgroundColor:'#87ABDD',color:'white',padding:'5px',borderRadius:'5px',
    fontSize:'14px',marginTop:'20px'}}>حفظ كلمة المرور</button>
    </div>

    </div>

    </Container>

    
  )
}

export default UserProfile
