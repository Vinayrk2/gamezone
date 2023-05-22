import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

        <Link className="navbar-brand" to="/"><img src="header-logo.jpg" class="ml-3" width="60px" height="50px" /></Link >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link >
            <Link className="nav-link" to="/contact">GAMES</Link >
            <Link className="nav-link" to="/Linkbout">About us</Link >
          </div>
        </div> */}
       <nav className="navbar justify-content-start sticky-top" style={{ "backgroundColor": "#000C66" }}>
       <Link to="/" className="nav-link"><img src="header-logo.jpg" className="ml-3" width="60px" height="50px" /></Link>
         <Link to="#" className="nav-link text-white">GAMES</Link>
         <Link to="/profile" className="nav-link text-white"> PROFILE </Link>
         <Link to="/about" className="nav-link text-white">ABOUT US</Link>
       </nav>
      <Outlet />
      </>
  )
}
