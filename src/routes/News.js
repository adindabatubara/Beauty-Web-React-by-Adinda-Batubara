import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NewsImg from '../assets/2.jpg';
import ReadMore from '../components/ReadMore';

function News() {
  return (
    <>
       <Navbar/>
       <Banner
          cName='banner-mid'
          bannerImg={NewsImg}
          title='News'
          btnClass='hide'
      />
      <ReadMore/>
      <Footer/>
    </>
  )
}

export default News