import React  from 'react'
import { Col, Row } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify';
import AdminAddCatgeHook from '../../custom_hooks/categoryHooks/AdminAddCatgeHook';


const AdminAddCategory = () => {


  const [imgs,catgName,ChangeCatgName,handleSubmit,onImageChange,selector,Ellipsis]=AdminAddCatgeHook()

  return (
     
    
    selector==true?<Ellipsis    />:
    <div>
     
   


      

      <Row className='justify-content-start'>
      
      <h3 className='  p-4'>أضف تصنيف جديد</h3>
  
  
      <Col sm='8'>
      
      <p style={{color:'lightgray'}}>صورة التصنيف</p>
  
  
      <div>
      <label htmlFor="upload-photo">
      <img src={imgs} alt='تصنيف' height='100px' width='120px' style={{cursor:'pointer'}}/>
      </label>
  
      <input type='file' id='upload-photo' name='photo' onChange={onImageChange}/>
      </div>
  
  
  
      <input
      type='text'
      className='d-blcok mt-3 px-3 w-100'
      placeholder='إسم التصنيف'
      onChange={ChangeCatgName}
      value={catgName}
      />
      
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
         
      }} onClick={handleSubmit}> حفظ التعديلات</button>
      
      </Col>
      
      </Row>
    {  //to check if its uploaded successfully or not 
      // selector===true? isPressed===false? res.status===201? SuccessNotify('تمت الإضافة')
      // : ErrorNotify(' فيه مشكلة حاول مرة ثانيه '):null :null  
    }
  <ToastContainer/>
    </div>
    
    )
    
 
}

export default AdminAddCategory
