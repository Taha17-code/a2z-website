
import React from 'react'
import '../../Sryles/SideFilter.css'

const SideFilter = () => {
  return (
    <div className='d-flex fatherDivFilter'  >
      <div>
      <div className='FilterCategory'>
      <div> <p><b>الفئة</b></p> </div>

     
      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>الكل</span>
      
      </div>
      


      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>أحذية</span>
      </div>


      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>قمصان</span>
      </div>


      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>بناطيل</span>
      </div>


      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>حقائب</span>
      </div>





      </div>
      
      </div>



      <div className='FilterCategory'>


      <div> <p><b>الماركة</b></p> </div>

    
      
      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>الكل</span>
      </div>


      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>نايك</span>
      </div>


      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>اديداس</span>
      </div>


      <div>
      <input type={'checkbox'} value={''}/>
      <span className='checkText'>قوتشي</span>
      </div>
</div>

    </div>
  )
}

export default SideFilter
