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
          <div className="col-6">
            <img className="img-fluid" src={game.image} alt="Error" />
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
      <div className="carousel slide carousel-fade" data-ride="carousel" id="myCarousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="2000">
            <img src="image1.jpg" className="d-block w-100 img-fluid" alt="" height="450px"/>

          </div>
          <div className="carousel-item" data-interval="2000">
            <img src="image2.jpg" className="d-block w-100 img-fluid" alt="" height="450px"/>
          </div>

          <div className="carousel-item" data-interval="2000">
            <img src="image3.jpg" className="d-block w-100 img-fluid" alt="" height="450px"/>
          </div>
        </div>
        <a href="#myCarousel" className="carousel-control-prev" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a href="#myCarousel" className="carousel-control-next" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>

      <div className="container-sm-fluid bg-info" style={{ "marginTop": "100px", "backgroundColor": "#FFAEBC" }}>
        <div className="row py-4 justify-content-around">
          <div className="col-sm-4">
            <h4>DOWNLOAD FOR DESKTOP</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>LINUX</td>
                  <td><button className="btn btn-success btn-sm" type='submit' >Download [2.5 GB]</button></td>
                </tr>
                <tr>
                  <td>WINDOWS</td>
                  <td><button className="btn btn-success btn-sm" type='submit'>Download [1.5 GB]</button></td>

                </tr>
                <tr>
                  <td>MAC OS</td>
                  <td><button className="btn btn-success btn-sm" type='submit'>Download [2.0 GB]</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-4">
            <h4>DOWNLOAD FOR MOBILE</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>LINUX</td>
                  <td><a href={ game.link ? game.link : "/sbx"}><button className="btn btn-success btn-sm" type='submit' >Download [2.5 GB]</button></a></td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>



      </div>

    </>
  )
}
