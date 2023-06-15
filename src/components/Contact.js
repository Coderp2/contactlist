import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = (props) => {
    const[showDetails,setDetails]= useState(false)
    const[moreDetails,setInfo]= useState(false)//to provide required details

    const navigate = useNavigate();// to navigate in between routers 


function deleteUser(id){               //function used to delete user returning promise by use of .then
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    method:'DELETE'
  }).then((res)=>{
res.json().then((resp)=>{
  console.warn(resp)
})
  });

}
  return (
    <div key={Math.random()} className='row'>
                    <div className='col-12 m-4 p-3'>
                    <h4 className='text-center'><button className='info' onClick={()=>setDetails(!showDetails)}>{props.element.name}</button></h4>{
                    
                    showDetails? <div className='editor'>
                    <span class="material-symbols-outlined" ><button className='border-0 text-Secondary' onClick={()=>setInfo(!moreDetails)}>visibility</button></span><span class="material-symbols-outlined"><button className='border-0 text-Success' onClick={()=>navigate("/Update")}>edit</button></span><span class="material-symbols-outlined"><button className='border-0 text-danger' onClick={()=>deleteUser(props.element.id)}>delete</button></span>
                        </div>:null
                    }
                    {
                        moreDetails? <div>
                        <p className='text-center'>phone:{props.element.phone}</p><p className='text-center'>email:{props.element.email}</p><p className='text-center'>address:{props.element.address.city}</p>
                        </div>:null
                    }
                
                
                    
                
                </div>
                
               

                </div>
                
  )
}

export default Contact
