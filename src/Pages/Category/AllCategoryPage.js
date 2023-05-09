import React, { Fragment, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import CategoryCard from '../../Components/Category/CategoryCard'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import PaginationPage from '../../Components/Utility/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory,getAllCategoryPage } from '../../Redux/Actions/categoryAction'


const AllCategoryPage = () => {
 
  const dispatch =useDispatch();
   // on first load
  useEffect(()=>{
   dispatch(getAllCategory(2));
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
  dispatch(getAllCategoryPage(2,page));
  console.log(page)
 }
  
  return (
    <div style={{paddingTop:'150px'}}>
    <CategoryContainer data={category} loading={loading}/>


    {
      numPageCounts>1?<PaginationPage numPageCounts={numPageCounts} onPress={getPage}/>:null
    }
    

    </div>
  )
}

export default AllCategoryPage
