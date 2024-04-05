import React from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './Footer';


const NewHome = () => {
  return (
    <div className="page">
      <Navbar />
      <Header />
      <div className="container headersection">
        <h1 className="text-dark fw-bold">Welcome, Suchita chaudhary</h1>
      </div>
      <Card />
      <Footer />
    </div>
  )
}

export default NewHome
