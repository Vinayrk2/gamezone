import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

        <Link className="navbar-brand" to="/"><img src="header-logo.jpg" className="ml-3" width="60px" height="50px" /></Link >
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
       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to="#" className="navbar-brand">
          <img src="/header-logo.jpg" alt="" className="" height="60px" width="60px"/></Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item dropdown"><Link to="" className="nav-link dropdown-toggle"
                        data-toggle="dropdown"> Games </Link>
                    <div className="dropdown-menu">
                        <Link to="" className="dropdown-item">PC Games</Link>
                        <Link to="" className="dropdown-item">Mobile Games</Link>
                    </div>
                </li>
                <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
            </ul>
           
        </div>
    </nav>
      <Outlet />
      </>
  )
}
