import './App.css';
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import NewHome from './NewHome';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShowUsers from './ShowUsers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/newhome' element={<NewHome/>}></Route>
      <Route path='/users' element={<ShowUsers/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
