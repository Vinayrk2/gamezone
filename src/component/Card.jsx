import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from '../Api/games'
export default function Card({query}) {
  // const query = "mobile";
  // console.log(query.category)
  
  
  return (
    <>
     <div className="row justify-content-around mt-3">
    {
      data.filter((val)=>val.device.includes(query.category)).map((val)=>{
        return (
          
        <div className="card col-md-4 mt-4" key={val.id} >
          <img src={val.image} alt="" className="card-img-top mt-2 w-100" height="250px"/>
          <div className="card-body">
            <div className="card-title text-center" style={{"textTransform":"uppercase"}}>{val.name}</div>
            {
              val.os.split(",").findIndex((os)=>navigator.userAgent.includes(os.trim())) == -1? "": 
              <span style={{"color":"lightgreen"}}> This Game can be installed on this device.</span>
            }
            <div className="card-text">{val.description.substring(0,90)}...<br />
            </div>
          </div>
          <Link to={"/gamepage?game="+val.id}><input type="submit" className="form-control bg-primary text-white mb-2" value="See More"/></Link>
          
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