import { useEffect, useState} from 'react';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

const List = ()=>{

    const [contact, setContacts] = useState([])//

    const getContacts = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        setContacts(await res.json());
    } 

    useEffect(()=>{//
        getContacts();
    },[]);
    const navigate = useNavigate();// to navigate in between routers 

    return(

    <div><span class="material-symbols-outlined"><button className='border-0 text-Success' onClick={()=>navigate("/Add")}>Add</button></span>
    
        <div className='container-fluid mt-5'>
            <div className='row'>
             <div className='col-12 flex-wrap d-flex justify-content-between '>
            {
                contact.map((element)=>{
                return(
                <Contact element={element}/>
                )
                
                })
                
            }

            
            </div>
           
               
               
               
            
            
            
            
            </div>
       
        </div>
    </div>


    )
}



export default List;