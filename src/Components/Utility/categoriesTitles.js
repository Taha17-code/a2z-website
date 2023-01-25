import React from 'react'
import { Link } from 'react-router-dom'
import '../../Sryles/categoriesTitles.css'

const CategoriesTitles = ({title,moreBtn,path}) => {
  return (
    <div className='d-flex justify-content-between pt-4' style={{margin:'30px'}}>
    <div className='Subtitle'>{title}</div>

    {moreBtn ?(

      <Link to={`${path}`} style={{textDecoration:'none'}}>
        <div  className='moreBtn'>{moreBtn} </div>
        </Link>
    ):null}
    

      
    </div>
  )
}

export default CategoriesTitles
