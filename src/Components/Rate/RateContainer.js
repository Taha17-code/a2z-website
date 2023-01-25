import React from 'react'
import { Container } from 'react-bootstrap'
import PaginationPage from '../Utility/Pagination'

const RateContainer = () => {
  return (
    <Container style={{backgroundColor:'white',borderRadius:'10px',
    width:'90%',marginTop:'50px',padding:'15px'}}>
      

     



    <div style={{marginBottom:'20px',padding:'15px'}}>

    <span style={{fontSize:'20px' ,marginRight:'8px',fontWeight:'bold'}}>التعليقات</span>

    <span  className='RateNum'  style={{marginRight:'8px' ,fontSize:'12px' ,fontWeight:'bold'}}>4.4</span>

    <span style={{color:'lightgrey' ,marginRight:'8px' ,fontSize:'12px' }}>(150 تقييم)</span>

    </div>

    <div style={{marginBottom:'20px',padding:'15px',width:'100%'}}>
     <p style={{fontWeight:'bold'}}>طه أحمد</p>
     <input type={'text'} placeholder='أكتب تعليقك' style={{width:'100%',borderRadius:'10px',height:'50px',border:'1.5px solid #87ABDD', fontSize:'12px'}}/>

    <div style={{width:'100%'}}>
    
    <button style={{color:'whitesmoke',backgroundColor:'#87ABDD',padding:'5px',
    marginTop:'10px',border:'none',textAlign:'left',
    borderRadius:'10px',fontSize:'14px'}}>أضف تعليق</button>
    </div>


     </div>



    <div>
    <span style={{fontSize:'15px' ,marginRight:'8px'}}>محمد أحمد خالد</span>

    <span  className='RateNum' style={{marginRight:'8px' ,fontSize:'12px',fontWeight:'bold'}}>3.2</span>
    <p style={{color:'grey',fontSize:'13px'}}>منتج مناسب والخامه ممتازه ومناسبة جدا اشكركم </p>
    <hr style={{width:'100%'}}/>
    
    </div>


    <div>
    <span style={{fontSize:'15px' ,marginRight:'8px'}}>محمد أحمد خالد</span>

    <span className='RateNum' style={{marginRight:'8px' ,fontSize:'12px',fontWeight:'bold'}}>3.2</span>
    <p style={{color:'grey',fontSize:'13px'}}>منتج مناسب والخامه ممتازه ومناسبة جدا اشكركم </p>
    <hr style={{width:'100%'}}/>
    
    </div>

    
    <div>
    <span style={{fontSize:'15px' ,marginRight:'8px'}}>محمد أحمد خالد</span>

    <span className='RateNum'  style={{marginRight:'8px' ,fontSize:'12px',fontWeight:'bold'}}>3.2</span>
    <p style={{color:'grey',fontSize:'13px'}}>منتج مناسب والخامه ممتازه ومناسبة جدا اشكركم </p>
    <hr style={{width:'100%'}}/>
    
    </div>

    <div>
    <span style={{fontSize:'15px' ,marginRight:'8px'}}>محمد أحمد خالد</span>

    <span  className='RateNum'  style={{marginRight:'8px' ,fontSize:'12px',fontWeight:'bold'}}>3.2</span>
    <p style={{color:'grey',fontSize:'13px'}}>منتج مناسب والخامه ممتازه ومناسبة جدا اشكركم </p>
    <hr style={{width:'100%'}}/>
    
    </div>


    <PaginationPage/>
    </Container>
  )
}

export default RateContainer
