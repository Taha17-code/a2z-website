import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';

import avatar from'../../assets/Images/AddImg.png'
import addColor from'../../assets/Images/add.png'



const AdminAddProduct = () => {
 
  const onSelect=()=>{
      
  }
   
  const onRemove=()=>{
    
  }

  const options=[
    {name: ' ملابس', id: 1},
    {name: 'أجهزة ', id: 2},
    {name: ' صحه', id: 3},
    {name: ' عناية', id: 4},
    {name: ' البيت والمطبخ', id: 5},
    {name: ' التصفيات', id: 6},
    {name: ' الألعاب', id: 7}
  ]
   
   


  return (
    <Container style={{color:'lightgray'}}>
     
    <Row className='justify-content-start'>
    
    <h3 className='  p-4'>أضف منتج </h3>

    <Col sm='8'>
    
    <p style={{color:'lightgray'}}>صورة الماركة</p>
    <img src={avatar} alt='براند' height='100px' width='120px'/>

    <input
    type='text'
    className='d-blcok mt-3 px-3 w-100'
    placeholder=' إسم المنتج '
    />

    <textarea
     className='p-2 mt-3 w-100'
     rows={'4'}
     cols='50'
     placeholder='وصف المنتج'

    
    />


    <input
    type='number'
    className='d-blcok mt-3 px-3 w-100'
    placeholder='  السعر قبل الخصم '
    />


    <input
    type='number'
    className=' d-blcok mx-2 mt-3 px-3 w-100'
    placeholder='  السعر   '
    />



    
    </Col>
    

    </Row>



    <Row className='justify-content-start ' style={{marginTop:'20px'}}>
    
 

    <Col sm='8'>
    
    <Multiselect
    
    className='mt-2 text-end optionProduct'
    placeholder='التصنيف الفرعي'
    options={options}
    onSelect={onSelect}
    onRemove={onRemove}
    displayValue="name"
    style={{color:'red'}}
    
    />


    <select  className='w-100 ' name='language' id='lang' placeholder='الماركة ' style={{marginTop:'20px'}}>
    <option value={'val'} disabled='true'>  الماركة </option>
    <option value={'val1'}>اديداس </option>
    <option value={'val2'}>بوما </option>
    <option value={'val3'}> قوتشي</option>
    <option value={'val3'}> زارا</option>
    <option value={'val3'}> نايكي</option>
    </select>

       
    </Col>

    </Row>




    <Row>
    <Col sm='8' style={{marginTop:'20px'}}>
    
    <p> الألوان المتاحة</p>
   
    <div className='d-flex justify-content-start flex-wrap'>
    <div className='ProductColors' style={{backgroundColor:'black',borderRadius:'100%',marginTop:'5px'}}></div>
    <div className='ProductColors' style={{backgroundColor:'red',borderRadius:'100%',marginTop:'5px'}}></div>
    <div className='ProductColors' style={{backgroundColor:'blue',borderRadius:'100%',marginTop:'5px'}}></div>    
    <img src={addColor} alt='add Color'  className='ProductColors' style={{borderRadius:'100%',marginTop:'5px'}}/>
    
    </div>
  
    

    </Col>
    
    </Row>


    <Row>
    
    <Col className='d-flex justify-content-end'>

    <button className=' d-inline mt-2' style={{
        textDecoration:'none',
        backgroundColor:'#87ABDD',
        color:'whitesmoke',
        border:'none',
        marginRight:'10px'
    }}> حفظ التعديلات</button>
    
    </Col>
    
    </Row>



    </Container>
  )
}

export default AdminAddProduct
