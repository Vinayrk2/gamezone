import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import { UserContext } from '../component/Context';
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}) {

  const user = useContext(UserContext);
  const [page, setPage] = useState("signup");
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleSubmit(e,form){
    e.preventDefault();

    if(form == "signup"){
      if(formData.name == "" || formData.lastname == "" || formData.email == "" || formData.password == "")
      {
         alert("Please fill out all the fields");
         return false;
      }
      else if(formData.password.length < 5){
         alert("Password length should be greater than 5");
         return false;
      }
    }

    if(form == 'signin'){
      if(formData.email == "" || formData.password == "")
      {
         alert("Please fill out all the fields");
         return false;
      }
      else if(formData.password.length < 5){
        alert("Password length should be greater than 5");
        return false;
     }
    }
        
    $.post("http://localhost:80/GameZone/gamezone/src/Backend/db.php",formData,(res)=>{
      res = JSON.parse(res);

    if(res.res == 0 ){
        alert(res.message);
        return false;
      }else{
        delete res.res;
        alert(res.message);
        delete res.message;
        sessionStorage.setItem("user",JSON.stringify({...res}));
        setUser(res);
        navigate("/");
      }
    }).fail((err)=>{
      alert("server not responding")
    })
  }

  function handleChange(e){
      let name = e.target.name;
      let value= e.target.value;
      setFormData(()=>{
        return {...formData, [name]:value}
      });
  }

  return (
    <>
    <div>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked="checked" />
  <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={()=>{setPage("signup")}}> Sign Up </label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={()=>{setPage("signin"); setFormData({...formData, 'name':"", 'lastname':""})}}> Sign In </label>

</div>
    </div>


    <div className='container row-1'>
      {
        page == "signup" ? <div id='signup' className='container-fluid col-3 pages'>
        <h2 style={{"color":"white","textAlign":"center"}}>  Sign Up </h2>
      <form name='signup' style={{"color":"white"}}>
        Name : <input type='text' name='name' className="form-control" value={formData.name} onChange={(e)=>handleChange(e)} /><br></br>
        Last Name : <input type='text' name='lastname' className="form-control" value={formData.lastname} onChange={(e)=>handleChange(e)} /><br></br>
        Email : <input type='email' name='email' className="form-control" value={formData.email} onChange={(e)=>handleChange(e)} /><br></br>
        Password : <input type='password' name='password' className="form-control" value={formData.password} onChange={(e)=>handleChange(e)} /><br></br>
        <input type='submit' className='btn btn-success' onClick={(e)=>handleSubmit(e,'signup')}></input><br></br>
      </form>
      </div> 
      :
      
      <div id='signin' className='container-fluid col-3 pages'>
        <h2 style={{"color":"white","textAlign":"center"}}>  Sign In </h2>
      <form name='signin' style={{"color":"white"}}>
        Email : <input type='email' name='email' className="form-control" value={formData.email} onChange={(e)=>handleChange(e)}/><br></br>
        Password : <input type='password' name='password' className="form-control" value={formData.password} onChange={(e)=>handleChange(e)}/><br></br>
        <input type='submit' className="btn btn-success" onClick={(e)=>handleSubmit(e,'signin')}></input><br></br>
      </form>
      </div>
      }
      

    </div>
  </>
  )
}
