import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BrandsPro from '../components/BrandsPro'; 
import BrandsImg from '../assets/1.jpg';

function Brands() {
  return (
    <>
       <Navbar/>
       <Banner
          cName='banner-mid'
          bannerImg={BrandsImg}
          title='Brands'
          btnClass='hide'
      />
      <BrandsPro/>
      <Footer/>
    </>
  )
}

export default Brands