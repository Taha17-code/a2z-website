import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../assets/Images/manModel.png';
import image2 from '../../assets/Images/Personal Care.png';
// import image3 from '../../assets/Images/kitchen tools.png';
import image3 from '../../assets/Images/pngegg.png';
import '../../Sryles/ImageSlider.css';
const ImageSlider = () => {
  return (
    <div >
    <Carousel className='imageCntrol '>
      <Carousel.Item  interval={1000}  >
        
      <div className=' contentFlex  '>

     <div className=" imagesSlider  ">  <img src={image1} alt="First slide"/> </div>
     
   
     <div>
     <h3>الماركات العالمية</h3>
     <p>جميع الماركات العالمية ,نايكي,اديداس,بوما</p>
     </div>
     </div>
     
     
      </Carousel.Item>

      <Carousel.Item interval={2000} >
      <div className=' contentFlex  '>
        
      
      <div className=" imagesSlider  ">  <img src={image2} alt="First slide"/> </div>
        
      <div>
      <h3>جميع منتجات العناية</h3>
      <p>كل الاحتياجات متوفرة  للعناية بالجسم</p>
      
      </div>
     
        </div>
      </Carousel.Item>

      <Carousel.Item interval={1000}  >
      <div className=' contentFlex  '>
        
      
      <div className=" imagesSlider  ">  <img src={image3} alt="First slide"/> </div>
        
      <div>
      <h3>منتجات الجملة </h3>
      <p>نوفر الملابس بالجملة لاصحاب المتاجر الصغيرة</p>
      
      </div>
     
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ImageSlider
