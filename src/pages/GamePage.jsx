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
   
      <div className="container-fluid" style={{ "margin-top": "60px" }}>
        <div className="row py-5 justify-content-center">
          <div className="col-12">
            <img className="img-fluid" src="/PUBG.jpg" alt="Error" height="200px" width="40px" />
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
      <div class="carousel slide carousel-fade" data-ride="carousel" id="myCarousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="2000">
            <img src="image1.jpg" class="d-block w-100 img-fluid" alt="" height="450px"/>

          </div>
          <div class="carousel-item" data-interval="2000">
            <img src="image2.jpg" class="d-block w-100 img-fluid" alt="" height="450px"/>
          </div>

          <div class="carousel-item" data-interval="2000">
            <img src="image3.jpg" class="d-block w-100 img-fluid" alt="" height="450px"/>
          </div>
        </div>
        <a href="#myCarousel" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#myCarousel" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>

      <div className="container-sm-fluid bg-info" style={{ "margin-top": "100px", "background-Color": "#FFAEBC" }}>
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
                  <td><button className="btn btn-success btn-sm" type='submit' >Download [2.5 GB]</button></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>



      </div>

    </>
  )
}
