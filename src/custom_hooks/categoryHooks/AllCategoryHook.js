import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory,getAllCategoryPage } from '../../Redux/Actions/categoryAction'


const AllCategoryHook = () => {

    const dispatch =useDispatch();
    // on first load
   useEffect(()=>{
    dispatch(getAllCategory(14));
   },[])
 
 
   //to get state from redux
   const category=useSelector(state=>state.allCategory.category.data); 
 
   const loading=useSelector(state=>state.allCategory.loading); 
 
   
   // to get page count
   const numOfPages=useSelector(state=>state.allCategory.category); 
    let numPageCounts=1;
   if(numOfPages.paginationResult){
     numPageCounts=numOfPages.paginationResult.numberOfPages
     console.log(numPageCounts)
   }
 
   // when press pageination
  const getPage=(page)=>{
   dispatch(getAllCategoryPage(14,page));
   console.log(page)
  }
   
  return [category,loading,numPageCounts,getPage]
}

export default AllCategoryHook
