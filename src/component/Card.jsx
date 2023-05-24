import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../Api/games'
export default function Card() {


  return (
    <>
     <div className="row justify-content-around mt-3">
    {
      data.map((val)=>{
        
        return (
          
        <div className="card col-md-4 mt-4" key={val.id} >
          <img src={val.image} alt="" className="card-img-top mt-2 w-100" height="250px"/>
          <div className="card-body">
            <div className="card-title text-center" style={{"textTransform":"uppercase"}}>{val.name}</div>
            <div className="card-text">{val.description}</div>
          </div>
          <Link to={"/gamepage?game="+val.name}><input type="submit" className="form-control bg-primary text-white mb-2" value="Submit"/></Link>

        </div>
        
        )
      })
    }
      </div>
    </>


  )
}
{/* <div className="card" style={{ "max-width": "540px;" }}>
          <div className="col-md-4">
            <img src="/image1.jpg" className="img-fluid rounded-start" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>

          </div>
        </div> */}