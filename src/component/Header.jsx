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
       <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to="#" class="navbar-brand">
          <img src="/header-logo.jpg" alt="" className="" height="60px" width="60px"/></Link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav">
                <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
                <li class="nav-item dropdown"><Link to="" class="nav-link dropdown-toggle"
                        data-toggle="dropdown">Games</Link>
                    <div class="dropdown-menu">
                        <Link to="" class="dropdown-item">PC Games</Link>
                        <Link to="" class="dropdown-item">Mobile Games</Link>
                    </div>
                </li>
                <li class="nav-item"><Link to="/about" class="nav-link">About Us</Link></li>
            </ul>
           
        </div>
    </nav>
      <Outlet />
      </>
  )
}
