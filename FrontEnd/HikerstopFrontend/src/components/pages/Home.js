import React from 'react';
import '../../App.css';
import Herosection from '../Herosection';
import Navbar from '../Navbarhome';
import Footer from '../../Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Herosection/>
        <Footer/>
        </>
  );
}

export default Home
