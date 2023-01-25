import React from 'react'
import ReactPaginate from 'react-paginate';
import '../../Sryles/PaginationPage.css'
const PaginationPage = () => {

    const handlePageClick=()=>{};
   
  return (
   
    <ReactPaginate 
    breakLabel="..."
    nextLabel=" >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    pageCount={10}
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
