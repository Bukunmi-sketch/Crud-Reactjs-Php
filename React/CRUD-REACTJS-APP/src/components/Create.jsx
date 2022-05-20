import React, { useState } from 'react';
import axios from 'axios';


function Create() {
   
               const [inputs, setinputs]=useState([]);
          
               const handleChange =(event)=>{
                   const name=event.target.name;
                   const value=event.target.value;
                   setinputs( values =>({...values, [name]:value}) );
                //  console.log(inputs); returns values in objects
                // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
               }
                        
            const handlesubmit=(event)=>{
                event.preventDefault();
                console.log(inputs);
          
            let formData=new FormData();
            formData.append("name", inputs.name)
            formData.append("email", inputs.email)
            formData.append("mobile", inputs.mobile)
                     
            axios({
                method:"POST",
                url:"http://localhost/websites/react-crud/Controllers/createcontroller.php",
                data:formData,
                config: { headers: { 'Content-Type' : 'multipart/form-data'}}
            }).then(function(response){
                console.log(response.data);
                if(response.status === 200){
                    alert('user has been created');
                    console.log(response.data);
               
                }
    
             
             //  setinputs('');
            }).catch(function(response){
                console.log(response)
            });
        }

    return ( 
        <div>
          <h1>create user</h1>
          <div className="container">
              <form onSubmit={handlesubmit}>
                <div className="namebox">
                  <div className="errorinfo"></div>
                      <label htmlFor="Name">Name: </label>
                         <input type="text" name="name" id="" onChange={handleChange} /> 
                </div>     
                <div className="namebox">
                          <label htmlFor="Email">Email: </label>
                           <input type="text" name="email" id="" onChange={handleChange}/> 
                 </div>             
                 <div className="namebox">          
                           <label htmlFor="Mobile">Mobile: </label>
                           <input type="text" name="mobile" id="" onChange={handleChange} /> 
                </div>    
                 <div className="namebox">    
                              <button>Save</button>
                 </div>              
              
          </form>
          </div>
        </div>
     );
}

export default Create;