import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutImg from '../assets/4.jpg';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs'

function About() {
  return (
    <>
       <Navbar/>
       <Banner
          cName='banner-mid'
          bannerImg={AboutImg}
          title='About'
          btnClass='hide'
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About