import React, { useState } from 'react'

export default function Login() {

  const [formData,setFormData] = useState({
    name: "" ,
    lastname: "" ,
    email: "" ,
    password: "" ,
  });

  function handleSubmit(){

  }

  function handleChange(e){
    console.log(e.target.value)
  }

  return (
    <div>
      <form method='post' action={'http://localhost:80/GameZone/gamezone/src/Backend/db.php'} style={{"color":"white"}}>
        Name : <input type='text' name='name' value={formData.name} onChange={()=>handleChange()}/><br></br>
        Last Name : <input type='text' name='lastname'value={formData.lastname} onChange={()=>handleChange()}/><br></br>
        Email : <input type='email' name='email' value={formData.email} onChange={()=>handleChange()}/><br></br>
        Password : <input type='password' name='password' value={formData.password} onChange={()=>handleChange()}/><br></br>
        <input type='submit' onSubmit={()=>handleSubmit()}></input><br></br>
      </form>
    </div>
  )
}
