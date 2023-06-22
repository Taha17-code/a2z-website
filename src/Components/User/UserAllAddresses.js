import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAdressCard from './UserAdressCard'

const UserAllAddresses = () => {
  return (
    <div>
      <h2>عناويني</h2>
      <UserAdressCard/>
      <UserAdressCard/>
      <UserAdressCard/>


    

      <Link  to="/User/add-address" style={{ textDecoration: "none" }}>
      <Row className=' d-flex justify-content-center w-100'>
      <button style={{backgroundColor:'#87ABDD',color:'white',
      textAlign:'center',width:'100px',border:'none',padding:'10px',
     fontSize:'14px',marginTop:'50px',borderRadius:'5px'}}>إضافة عنوان</button>

     </Row>

      </Link>
   
      
      
    </div>
  )
}

export default UserAllAddresses
