import React from 'react'
import './PdiscStyle.css'

function PdiscData(props) {
  return (
    <div  className='pd-card'>
        <div className='pd-image'>
            <img src={props.image} alt="images" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <button className='btn-disc'>{props.link}</button>
    </div>
  )
}

export default PdiscData