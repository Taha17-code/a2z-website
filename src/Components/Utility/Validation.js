import React from 'react'
import Lottie from 'lottie-react'
import { Row,Container } from 'react-bootstrap'
import successfulAnimation from '../../assets/LottieAnimation/successfulAnimation.json'
import errorAnimation from '../../assets/LottieAnimation/errorAnimation.json'
import { useEffect } from 'react'
 


const Validation = ({status,statusCase,caseText}) => {

   


    // to let the notify just a 3 seconds
   useEffect(()=>{
    const timeOut=setTimeout(()=>{
        const tempDisplay=document.getElementById('divStatusTemp')
        tempDisplay.style.display='none';

    },2000)
    return () => clearTimeout(timeOut)
  
  
   })

  return (
    
    <div className="position-absolute " id='divStatusTemp' style={{   width:'100%',height:'100%', zIndex:'1'}} sm='12' lg='12' md='8'>
 
    
    <Row >

    {
        status==='success'?<div>
        <Lottie style={{   width:'300px ',margin:'0 auto'}} animationData={successfulAnimation} loop={false}></Lottie></div>
        

        :<Lottie style={{   width:'300px',margin:'0 auto'}} animationData={errorAnimation} loop={false}></Lottie>
    }
    
    </Row>

    <Row>
    {
        statusCase=='green'?<p style={{color:'green',textAlign:'center'}}>{caseText}</p>:<p style={{color:'red',textAlign:'center'}}>{caseText}</p>
    }
    
    </Row>
      
   
    </div>
  )
}

export default Validation
