import React from 'react'

const Navbar = () => {
  return (
    <header>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary"> */}
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary border-bottom border-body" data-bs-theme="dark">
        <div className="container">
        <a className="navbar-brand" href="#">E-BOOKS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto p-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">All Books PDF</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Top Rated Books</a>
        </li>

        <li className="nav-item">
        <a className="nav-link" href="#">Popular Books</a>
        </li>

        <li className="nav-item">
        <a className="nav-link" href="#">Latest Releases</a>
        </li>
       </ul>
        </div>
        </div>
        </nav>
    </header>
  )
}

export default Navbar
