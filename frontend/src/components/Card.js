import React from 'react'

const Card = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="card col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <img src="placeholderimage.png" className="card-img-top" alt=""/>
        <div className="card-body">
        <h5 className="card-title">Book Name</h5>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="#" className="btn btn-dark">Download PDF  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
        </svg></a>
        </div>
        </div>
        </div>
    </div>
    
  )
}

export default Card
