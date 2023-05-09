import React ,{useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from'../../assets/Images/AddImg.png'
const AdminAddCategory = () => {

const [imgs,setImage]=useState(avatar)
const [catgName,setCatgName]=useState('')
 
// when an image changes save it
  const onImageChange=(event)=>{

    if(event.target.files && event.target.files[0]){
       setImage(URL.createObjectURL(event.target.files[0]))
    }

  }

  // save data to the Database
  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  return (
    <div>
      

    <Row className='justify-content-start'>
    
    <h3 className='  p-4'>أضف تصنيف جديد</h3>


    <Col sm='8'>
    
    <p style={{color:'lightgray'}}>صورة التصنيف</p>


    <div>
    <label for="upload-photo">
    <img src={imgs} alt='تصنيف' height='100px' width='120px' style={{cursor:'pointer'}}/>
    </label>

    <input type='file' id='upload-photo' name='photo' onChange={onImageChange}/>
    </div>



    <input
    type='text'
    className='d-blcok mt-3 px-3 w-100'
    placeholder='إسم التصنيف'
    onChange={(e)=>setCatgName(e.target.value)}
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
    </div>
  )
}

export default AdminAddCategory
