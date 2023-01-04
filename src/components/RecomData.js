import React from 'react'
import './RecommendationStyles.css'

function RecomData(props) {
  return (
    <div  className='p-card'>
        <div className='p-image'>
            <img src={props.image} alt="image" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default RecomData