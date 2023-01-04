import React from 'react'
import './BrandsProStyles.css'

function BrandsProData(props) {
  return (
    <div  className='b-card'>
        <div className='b-image'>
            <img src={props.image} alt="images" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default BrandsProData