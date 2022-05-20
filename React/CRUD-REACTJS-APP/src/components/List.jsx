import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


function List(){  
    const [users, setUsers]= useState([]);
   

    useEffect(()=>{
        getUsers();
    }, []); 

    function getUsers(){
        axios.get("http://localhost/websites/react-crud/Controllers/getuserscontroller.php").then(function(response){
            console.log(response.data);
            setUsers(response.data)
        })
    }

   function deleteUser(id){
       if(window.confirm('Are u sure you want to delete this?')){
        axios.delete(`http://localhost/websites/react-crud/Controllers/deletecontroller.php/?id=${id}`).then(function(response){
            if(response.status === 200){
               // alert('user deleted');
            console.log(response.data);
            getUsers();
           
           }

        })
    }
    }

    return(
        <div className='list-container'>
        <h1>List users</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, key)=> 
                    <tr key={key}>
                        <td className="id">{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td className="link"> <Link to={`user/${user.id}` } className="button"> Edit </Link> 
                        &nbsp;
                         <button onClick={()=>deleteUser(user.id)} className="button">Delete </button> 
                        </td>
                        </tr>                       
                        )}
            </tbody>
        </table>
        </div>
    )
}

export default List;