import React, { useContext, useState } from 'react';
import $ from 'jquery';
import { UserContext } from '../component/Context';
import { useNavigate } from 'react-router-dom';

export default function Login({setUser}) {

  const user = useContext(UserContext);
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name: undefined,
    lastname: undefined,
    email: undefined,
    password: undefined,
  });

  function handleSubmit(e){
    e.preventDefault();
    
    $.post("http://localhost:80/GameZone/gamezone/src/Backend/db.php",formData,(res)=>{
      if(res == 0 ){
        alert("Invalid Form Entry")
        return false;
      }else{
        console.log(res)
        setUser(JSON.parse(res))
        navigate("/");
      }
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
    <div>
      <div className='container'>
      <form name='signup' style={{"color":"white"}}>
        Name : <input type='text' name='name' value={formData.name} onChange={(e)=>handleChange(e)}/><br></br>
        Last Name : <input type='text' name='lastname'value={formData.lastname} onChange={(e)=>handleChange(e)}/><br></br>
        Email : <input type='email' name='email' value={formData.email} onChange={(e)=>handleChange(e)}/><br></br>
        Password : <input type='password' name='password' value={formData.password} onChange={(e)=>handleChange(e)}/><br></br>
        <input type='submit' onClick={(e)=>handleSubmit(e)}></input><br></br>
      </form>
      </div>

      <div className='container'>
      <form name='signin' style={{"color":"white"}}>
        Email : <input type='email' name='email' value={formData.email} onChange={(e)=>handleChange(e)}/><br></br>
        Password : <input type='password' name='password' value={formData.password} onChange={(e)=>handleChange(e)}/><br></br>
        <input type='submit' onClick={(e)=>handleSubmit(e)}></input><br></br>
      </form>
      </div>
    </div>
  )
}
