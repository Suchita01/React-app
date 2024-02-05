import React from 'react'
import {Link, Navigate, useLocation} from 'react-router-dom';
import Footer from './Footer';


function Home() {
    const location=useLocation()
    console.log(location.state);
    if (location.state === null) {
        alert("Please Login first!!!")
        return <Navigate to="/"/>;
      }

  return (
    <div className='parent bg-primary'>
    <div className='top-headings text-white text-end pt-3 pe-5'>
      <a href ="https://suchita01.github.io/" className='porfoliolink text-white text-decoration-none p-3' target='_blank'>Portfolio</a>
      <Link to="/" className='logout text-white text-decoration-none p-3'>Logout</Link>
    </div>
    <div className='d-flex justify-content-center align-items-center text-white vh-100'>
     <h1>Welcome ! {location?.state?.id}</h1>
    </div>
    <Footer/>

    </div>
    
  )
}

export default Home
