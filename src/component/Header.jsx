import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { UserContext } from './Context';

export default function Header({setQuery}) {
  const user = useContext(UserContext);


  return (
    <>
      
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
                        <Link onClick={()=>setQuery({category:""})} className="dropdown-item">All Games</Link>
                        <Link onClick={()=>setQuery({category:"pc"})} className="dropdown-item">PC Games</Link>
                        <Link onClick={()=>setQuery({category:"mobile"})} className="dropdown-item">Mobile </Link>
                    </div>
                </li>
                <li className="nav-item"><Link to="/about" className="nav-link"> About Us </Link></li>
                {
                  !user.name && <li className="nav-item"><Link to="/login" className="nav-link"> Login </Link></li>
                }
                {
                  user.name && <Link to="/profile"><li className="nav-item nav-link"> { user.name + " " + user.lastname}</li></Link>
                }
                
                
                

            </ul>
           
        </div>
    </nav>
      <Outlet />
      </>
  )
}
