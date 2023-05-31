import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

export default function Profile({user, setUser}) {

  const navigate = useNavigate();
  const [tempUserInfo, setTempUserInfo] = useState({...user});

  useEffect(()=>{
    setTempUserInfo(JSON.parse(sessionStorage.getItem("user")));
  },[])


  function editProfile(){
    $(".form-control").removeAttr("disabled");
  }

  function handleChange(e){
    const updatedUser = {...tempUserInfo, [e.target.name] : e.target.value};
    setTempUserInfo({...updatedUser});
  }
  // 192.168.0.103
  function submitChange(){
    $.post("http://192.168.0.103:8080/GameZone/gamezone/src/Backend/db.php",tempUserInfo,(res)=>{
      res = JSON.parse(res);
      setUser({...tempUserInfo});
      sessionStorage.setItem("user", JSON.stringify({...tempUserInfo}));
      $(".form-control").attr("disabled","disabled");
       alert(res.message); 
    }).fail((err)=>{
      alert("server not responding"+ err);
    })
  }

  function logoutUser(){
    sessionStorage.clear();
    setUser({});
    setTempUserInfo({});
    navigate('/');
  }

  return (
    <div className='main-container'>
    <div className='container-fluid profile-container bg-light'>

      <p className='heading card-title'> Profile </p>
      
  <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={tempUserInfo.email? tempUserInfo.email : ""}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={tempUserInfo.name? tempUserInfo.name:""} name='name' onChange={(e)=>handleChange(e)} id="name" disabled="disabled"/>
    </div>
  </div>

  <div className="mb-3 row">
    <label htmlFor="lastname" className="col-sm-2 col-form-label">LastName</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={tempUserInfo.lastname? tempUserInfo.lastname:""} name='lastname' onChange={(e)=>handleChange(e)} id="lastname" disabled="disabled"/>
    </div>
  </div>

<div className='btnContainer'>
  <button type="button" className="btn btn-primary" onClick={()=>{ navigate(-1)}}>Back</button>
<button type="button" className="btn btn-secondary" onClick={()=>{ editProfile()}}>Edit Profile</button>
{
   JSON.stringify(tempUserInfo) !== JSON.stringify(user) && <button type="button" className="btn btn-success" onClick={()=>{ submitChange()}} id='submitBtn'>Save Profile</button>
}
<button className='btn btn-danger  float-end' onClick={()=>{logoutUser()}}> Logout </button>
</div>

    </div>
    </div>

  )
}
