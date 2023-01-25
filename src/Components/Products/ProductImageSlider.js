import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import White from '../../assets/Images/whiteHoodi.png'
import Black from '../../assets/Images/blackHoodi.png'
import Blue from '../../assets/Images/hoodie.png'


import '../../Sryles/ProductDetails.css'


const ProductImageSlider = () => {
  return (
    <div >
    <Carousel >
    <Carousel.Item >
    <div  className='ImageProductDetails'>
      <img
    
        src={Blue}
        alt="First slide"
      />
      </div>
    </Carousel.Item>

    <Carousel.Item>
    <div  className='ImageProductDetails'>
      <img
   
        src={White}
        alt="Second slide"
      />
      </div>

  
    </Carousel.Item>


    <Carousel.Item>

    <div  className='ImageProductDetails'>
      <img

        src={Black}
        alt="Third slide"
      />

      </div>

    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default ProductImageSlider
