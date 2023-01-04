import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal'
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Recommendation from '../components/Recommendation.js';
import Footer from '../components/Footer';

function Home({ login, nama }) {
  const [openModal, setOpenModal] = useState(true);


  useEffect(() => {
    console.log(login);

  }, [])

  return (
    <>
      <Navbar login={login} nama={nama} />
      <Banner
        cName='banner'
        bannerImg='https://media.istockphoto.com/id/1342793126/id/foto/abstrak-latar-belakang-pemandangan-lanskap-natal-musim-dingin-dengan-stand-produk.jpg?s=612x612&w=0&k=20&c=mwqLh9YEt2HVvRlGMkxajOcyANMg5XSGjGJg_T22M2A='
        title='MIRACLE GLOW 24 HOUR'
        text='-Your Beauty Your Journey-'
        buttonText='Disc Products'
        url='/'
        btnClass='show'
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <Products />
      <Recommendation />
      <Footer />
    </>
  )
}

export default Home