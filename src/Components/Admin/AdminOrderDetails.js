import React from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'

const AdminOrderDetails = () => {
  return (
    <div>
    <h3>تفاصيل الطلب رقم #12224</h3>

    <CartItem/>
  

    <Row className='CartContainer w-100'  style={{marginTop:'20px'}}>
    
    <h4>تفاصيل العميل</h4>

    <div>
      <span> الإسم:</span>
    <span> أحمد عبدالله </span>
    </div>
    

    <div>
    <span> رقم الهاتف:</span>
  <span>  0582157155 </span>
  </div>


  <div>
  <span> الإيميل:</span>
<span>  taahaa.com@gmail.com </span>
</div>
    

<div style={{textAlign:'center',width:'100%',padding:'10px',borderTop:'0.2px solid' , marginTop:'15px' }}>
  <span> الإجمالي  45000 ريال</span>


</div>




<div style={{textAlign:'center',width:'100%' }}>


  <select  className='w-50 ' name='orderCase' id='orderCase' placeholder='حالة الطلب'>
  <option> حالة الطلب</option>
  <option>قيد التنفيذ</option>
  <option>تم الإنتهاء</option>
  <option> إلغاء</option>
  </select>
  <button style={{
    textDecoration:'none',
    backgroundColor:'#87ABDD',
    color:'whitesmoke',
    border:'none',
    marginRight:'10px'
  }}> حفظ</button>


</div>


    </Row>

    </div>
  )
}

export default AdminOrderDetails
