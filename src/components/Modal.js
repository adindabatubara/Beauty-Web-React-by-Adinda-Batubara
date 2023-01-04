import React from 'react'
import sale from '../assets/27.png'
import './Modal.css'

const Modal = ({open, onClose }) => {
    if (!open) return null
  return (
    <>
      <div onClick={onClose} className='overlay'>
        <div onClick={(e)=>{
          e.stopPropagation()}} className="modalContainer">
          <img src={sale} alt="" />
          <div className="modalRright">
            <p onClick={onClose} className='closeBtn'>X</p>
            <div className="conten">
              <p>Get Your Special </p>
              <h1>Disc Up To 75%</h1>
              <p>For Your New Year Sale</p>
            </div>
            <div className="btnContainer">
              <a href="/sale">
                <button className='btnPrimary'>Get Disc</button>
              </a>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Modal