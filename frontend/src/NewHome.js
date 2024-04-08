import React from 'react'
import NavbarNew from './components/NavbarNew';
import Header from './components/Header';
import CardNew from './components/CardNew';
import Carousels from './components/Carousels';
import Footer from './Footer';


const NewHome = () => {
  return (
    <div className="page">
      <NavbarNew />
      <Carousels />
      <Header />
      <CardNew />
      <Footer />
    </div>
  )
}

export default NewHome
