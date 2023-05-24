import React from 'react'

export default function GamePage() {
  return (
    <>
      <div className="container-fluid" style={{ "margin-top": "60px" }}>
        <div className="row py-5 justify-content-center">
          <div className="col-4">
            <img src="/PUBG.jpg" alt="Error" height="200px" width="40px" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table text-white">
              <tbody>
                <tr className="text-center">
                  <td colspan="2">GAME DETAILS</td>
                </tr>
                <tr>
                  <td className=''>NAME</td>
                  <td>PLAYERS UNKNOWN BATTLEGROUND</td>
                </tr>

                <tr>
                  <td>OWNED BY</td>
                  <td>TENCENT COOPERATIVE LIMITED</td>
                </tr>

                <tr>
                  <td>TYPE</td>
                  <td>MULTIPLAYER GAME</td>
                </tr>

                <tr>
                  <td>OS SUPPORT</td>
                  <td>LINUX,WINDOWS,MAC</td>
                </tr>

                <tr>
                  <td>DOWNLOAD SIZE</td>
                  <td rowspan="2">1.5 GB&nbsp; <a href="">[MOBILE]</a><br></br> 4.0 GB&nbsp; <a href="">[DESKTOP]</a> </td>
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
              <iframe width="560" height="400" src="https://www.youtube.com/embed/uCd6tbUAy6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="d-block w-100"></iframe>
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

      <div className="container bg-info" style={{ "margin-top": "100px" }}>
        <div className="row py-4">
          <div className="col-4 offset-2">
            <h4>DOWNLOAD FOR DESKTOP</h4>
            <table className="table" style={{"font-size":"22px"}}>
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
            <table className="table" style={{"font-size":"22px"}}>
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
