import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './List.css'
import './Create.css'


function App() {
  return ( 
    <div className="app">
      <BrowserRouter>
         <nav>
           <ul>
             <li> <Link to='/' className='btnlist'>List user</Link> </li>
             <li> <Link to='user/create' className='btnlist'>create user</Link> </li>
           </ul>
         </nav>
         <Routes>
           <Route index element={<List/>} />
           <Route path='user/create' element ={<Create/>} />
           <Route path='user/:id' element={<Update/>} />
         </Routes>
      </BrowserRouter>
    </div>
   );
}

export default App;


