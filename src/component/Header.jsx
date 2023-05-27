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
        <a href="#" class="navbar-brand">GAME ZONE</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav">
                <li class="nav-item"><a href="" class="nav-link">Games</a></li>
                <li class="nav-item dropdown"><a href="" class="nav-link dropdown-toggle"
                        data-toggle="dropdown">Games</a>
                    <div class="dropdown-menu">
                        <a href="" class="dropdown-item">PC</a>
                        <a href="" class="dropdown-item">Mobile</a>
                    </div>
                </li>
                <li class="nav-item"><a href="" class="nav-link">Games</a></li>
            </ul>
           
        </div>
    </nav>
      <Outlet />
      </>
  )
}
