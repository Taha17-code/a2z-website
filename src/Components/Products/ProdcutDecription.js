import React from 'react'
import { Row } from 'react-bootstrap'

const ProdcutDecription = () => {
  return (
    <Row>
      <div> 
      <p  style={{color:'lightgrey',fontSize:'12px',fontWeight:'bold'}}>الملابس</p>
      <p style={{fontSize:'15px'}}> هودي فليس بإكمام ريجلان  شتوي  من شركة LFL</p>
      </div>


      <div style={{marginBottom:'15px'}}>
      <span style={{fontWeight:'bold'}}>الماركة:</span>
      <span>LFL</span>
      
      </div>


      <div style={{marginBottom:'15px'}}>
      <span style={{fontWeight:'bold',textAlign:'center'}} > الألوان: </span>
      <div  className='ProductColors' style={{backgroundColor:'blue',borderRadius:'100%'}}></div>
      <div className='ProductColors' style={{backgroundColor:'white',borderRadius:'100%'}}></div>
      <div className='ProductColors' style={{backgroundColor:'black',borderRadius:'100%'}}></div>
      </div>

      <div>
      <p style={{fontWeight:'bold',marginBottom:'15px'}}>المواصفات:</p>
      <p style={{fontSize:'15px'}}>العلامة الجديدة للتميز.. مستوحاة من التراث بتصميم يواكب المستقبل - حروف شعارنا هي رؤية حديثة بتصميم عريق.

      احصل على إطلالة أنيقة ومريحة في العطلة الأسبوعية مع هودي سهل الارتداء مصنوع من مزيج القطن العضوي والصوف المطاطي.</p>
      
      </div>


      <div className='cartAndPrice'>
      
      <span> 220 SR</span>
      <button> أضف للسلة</button>
      </div>
    </Row>
  )
}

export default ProdcutDecription
