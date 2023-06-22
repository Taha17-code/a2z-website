import React, {  useEffect } from 'react'

import { useSelector,useDispatch } from 'react-redux'

import { getAllCategory } from '../../Redux/Actions/categoryAction'

const HomeCategroiesHook = () => {
 
    const dispatch =useDispatch();
   
    useEffect(()=>{
     dispatch(getAllCategory());
    },[])
  
    const category=useSelector(state=>state.allCategory.category.data); 
    const loading=useSelector(state=>state.allCategory.loading); 
  
  
   
    console.log(category)
    console.log(loading)
  
    const colors=['#F25379','#ADCAF6','#E40078','#87ABDD','#F25379']

    return[category,loading,colors]
}

export default HomeCategroiesHook
