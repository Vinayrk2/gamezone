import React, { useEffect, useState } from 'react';
import { getGame } from '../Api/games';

export default function GamePage() {
    
  const [game, setGame] = useState({})

  useEffect(()=>{
    var query = window.location.href.split('?')[1].split('=')[1];
    query = query ? query : 1;
    setGame(getGame(query));

  },[])


  return (
    <>
      <div className="container-fluid" style={{ "marginTop": "60px" }}>
        <div className="row py-5 justify-content-center">
          <div className="col-4">
            <img src={game.image} alt="Error" height="200px" width="40px" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table text-white">
              <tbody>
                <tr className="text-center">
                  <td colSpan="2">GAME DETAILS</td>
                </tr>
                <tr>
                  <td className=''>NAME</td>
                  <td>{game.name ? game.name.toUpperCase() : game.name}</td>
                </tr>

                <tr>
                  <td>OWNED BY</td>
                  <td>{game.owner?game.owner.toUpperCase():"No data available"}</td>
                </tr>

                <tr>
                  <td>TYPE</td>
                  <td>{game.type}</td>
                </tr>

                <tr>
                  <td>OS SUPPORT</td>
                  <td>{game.os}</td>
                </tr>

                <tr>
                  <td>DOWNLOAD SIZE</td>
                  <td rowSpan="2">1.5 GB&nbsp; <a href="">[MOBILE]</a><br></br> 2gb &nbsp; <a href="">[DESKTOP]</a> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-5" style={{ "width": "700px" }}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <iframe width="560" height="400" src="https://www.youtube.com/embed/uCd6tbUAy6o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="d-block w-100"></iframe>
            </div>
            <div className="carousel-item">
              <img src="pubg-2.jpg" className="d-block w-100" alt="" height="400px" />
            </div>
            <div className="carousel-item">
              <img src="pubg-3.jpg" className="d-block w-100" alt="" height="400px" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container bg-info" style={{ "marginTop": "100px"}} id="#download-id">
        <div className="row py-4">
          <div className="col-4 offset-2">
            <h4>DOWNLOAD FOR DESKTOP</h4>
            <table className="table" style={{"fontSize":"22px"}}>
              <tbody>
                <tr>
                  <td>LINUX</td>
                  <td><button className="btn btn-success" type='submit' >Download [2.5 GB]<br></br>32 / 64 bit</button></td>
                </tr>
                <tr>
                  <td>WINDOWS</td>
                  <td><button className="btn btn-success" type='submit'>Download [1.5 GB]<br></br>32 / 64 bit</button></td>

                </tr>
                <tr>
                  <td>MAC OS</td>
                  <td><button className="btn btn-success" type='submit'>Download [2.0 GB]<br></br>32 / 64 bit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4 offset-1">
            <h4>DOWNLOAD FOR MOBILE</h4>
            <table className="table" style={{"fontSize":"22px"}}>
              <tbody>
              <tr>
                  <td>LINUX</td>
                  <td><button className="btn btn-success" type='submit' >Download [2.5 GB]</button></td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>

        
      
      </div>

    </>
  )
}
