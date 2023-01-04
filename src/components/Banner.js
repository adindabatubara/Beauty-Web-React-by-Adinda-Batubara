import React from 'react'
import './BannnerStyle.css';

function Banner(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt='BanImg' src={props.bannerImg} />
        <div className='banner-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href='/sale' className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>  
    </>
  );
}

export default Banner
