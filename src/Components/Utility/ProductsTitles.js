import React from 'react'
import '../../Sryles/ProductsTitles.css'
import UnopDropdown from 'unop-react-dropdown';
import filter from '../../assets/Images/filterIcon.png'
const ProductsTitles = ({title,path}) => {

  const handler=()=>{}
  return (
    <div className='d-flex justify-content-between pt-4' style={{margin:'30px'}}>
    <div className='Subtitle'>{title}</div>


    <UnopDropdown
    onAppear={handler}
    onDisappearStart={handler}
    trigger={<div className="AnimatedDropdownButton" >  <span>الترتيب حسب</span>  <img src={filter} className='filterImg'/>  </div>}
    delay={300}
    align="CENTER"
    hover
 
    >
<div className='menuFilter'>
<div className='filterItem'>الكل</div>
<div className='filterItem'>الاكثر مبيعاً</div>
<div className='filterItem'>الأحدث</div>
<div className='filterItem'>الأقل سعراً</div>
<div className='filterItem'>الأعلى سعراً</div>
</div>
</UnopDropdown>

</div>  

    )
    

      

  
}

export default ProductsTitles
