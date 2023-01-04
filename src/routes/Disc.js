import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PdImg from '../assets/28.jpg';
import Pdisc from '../components/Pdisc';

function Disc() {
  return (
    <>
       <Navbar/>
       <Banner
          cName='banner-mid'
          bannerImg={PdImg}
          title='Sale'
          btnClass='hide'
      />
      <Pdisc/>
      <Footer/>
    </>
  )
}

export default Disc