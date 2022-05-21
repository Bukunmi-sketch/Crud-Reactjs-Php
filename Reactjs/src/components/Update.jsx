import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";


function Update() {
    const navigate= useNavigate();
    const [input, setInputs]=useState([]);
    const {id}=useParams();

    console.log(id);

    useEffect(()=>{
        getUsers();
    },[id]);

    function getUsers(){
        axios.get(`http://localhost/websites/react-crud/Controllers/singleusercontroller.php/?id=${id}` ).then(function(response){
            //console.log(response.data[`${input.id}`]);
            setInputs(response.data);
            console.log(response.data);
        })
    }

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        setInputs( values =>({...values, [name]: value}) );
    }

   const handlesubmit=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost/websites/react-crud/Controllers/updatecontroller.php/?id=${id}`, input).then(function(response){
            console.log(response.data);
            navigate('/');
        })
    }
    

    return ( 
        <div>
        <h1>Edit user</h1>
        <div className="container">
            <form onSubmit={handlesubmit}>
              <div className="namebox">
                <div className="errorinfo"></div>
                    <label htmlFor="Name">Name: </label>
                       <input type="text" name="name" id="" value={input.name} onChange={handleChange} /> 
              </div>     
              <div className="namebox">
                        <label htmlFor="Email">Email: </label>
                         <input type="text" name="email" id="" value={input.email} onChange={handleChange}/> 
               </div>             
               <div className="namebox">          
                         <label htmlFor="Mobile">Mobile: </label>
                         <input type="text" name="mobile" id="" value={input.mobile} onChange={handleChange} /> 
              </div>    
               <div className="namebox">    
                            <button>Save</button>
               </div>              
            
        </form>
        </div>
      </div>
     );
}

export default Update;