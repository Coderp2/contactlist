import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = (props) => {
    const navigate = useNavigate();
    const[name,setName]=useState("")
    const[phone,setPhone]=useState("")
    const[email,setEmail]=useState("")

    function updateUser(id) {
      let item = { name, phone, email };
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
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
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br /><br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
  
        <button type='button'  class='btn btn-success'   onClick={() => updateUser(1)}>Update</button>
        <button type='button'  class='btn btn-primary'   onClick={()=>navigate(-1)}>Home</button>
        
    </div>
      
    );
      
  
}

export default Update
