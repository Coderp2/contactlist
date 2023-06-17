import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Update = (props) => {
  const navigate = useNavigate();
  const[name,setName]=useState("")
  const[phone,setPhone]=useState("")
  const[email,setEmail]=useState("")

  function addUser() {
    let item = { name, phone, email };
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then((res) => {
        res.json().then((resp) => {
          console.warn(resp);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      <input type="text" value={name} placeholder='name...' onChange={(e) => setName(e.target.value)} /> <br /><br />
      <input type="number" value={phone} placeholder='phone...' onChange={(e) => setPhone(e.target.value)} /> <br /><br />
      <input type="text" value={email} placeholder='email...' onChange={(e) => setEmail(e.target.value)} /> <br /><br />

      <button type='button'  class='btn btn-success' onClick={() => addUser(1)}>Add to contacts</button>
      <button type='button'  class='btn btn-primary' onClick={()=>navigate(-1)}>Home</button>
      
  </div>
    
  );
    

}

export default Update
