import React from 'react'
import ReactPaginate from 'react-paginate';
import '../../Sryles/PaginationPage.css'
const PaginationPage = ({numPageCounts,onPress}) => {

    const handlePageClick=(data)=>{

      onPress(data.selected+1);
      
    };


   
  return (
   
    <ReactPaginate 
    breakLabel="..."
    nextLabel=" >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    pageCount={numPageCounts}
    previousLabel="< "
    renderOnZeroPageCount={null}
    containerClassName="pagination"
    pageClassName='page-numSt'
    previousClassName=''
    nextClassName=''
    previousLinkClassName='page-num'
    nextLinkClassName='page-num'
   
    
  />
 
        

    
  )
}

export default PaginationPage
