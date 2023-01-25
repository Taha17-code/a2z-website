import React, { Fragment } from 'react'
import Nike from '../../assets/Images/Nike.png';
import Addidas from '../../assets/Images/Addidas.png';
import Puma from '../../assets/Images/puma.png';
import Gucci from '../../assets/Images/Gucci.png';
import Brands from './BrandsCard';
const AllBrandsContatiner = () => {

   


  return (
    <Fragment>
    <div className='d-flex justify-content-around flex-wrap w-100'>
    
    <Brands imgBrand={Nike}/>
    <Brands imgBrand={Addidas}/>
    <Brands imgBrand={Puma}/>
    <Brands imgBrand={Gucci}/>

    <Brands imgBrand={Nike}/>
    <Brands imgBrand={Addidas}/>
    <Brands imgBrand={Puma}/>
    <Brands imgBrand={Gucci}/>

    <Brands imgBrand={Nike}/>
    <Brands imgBrand={Addidas}/>
    <Brands imgBrand={Puma}/>
    <Brands imgBrand={Gucci}/>

    <Brands imgBrand={Nike}/>
    <Brands imgBrand={Addidas}/>
    <Brands imgBrand={Puma}/>
    <Brands imgBrand={Gucci}/>
   

    </div>
    </Fragment>
  )
}

export default AllBrandsContatiner
