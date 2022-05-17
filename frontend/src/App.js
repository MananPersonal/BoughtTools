import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Rent from './Components/Rent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
   <Router>
     <Header />
       <main>
           <Routes>
               <Route path="/" element={<Home />}/>
           </Routes>
           <Routes>
               <Route path="/rent" element={<Rent />}/>
           </Routes>
       </main>
   </Router>
  );
}

export default App;
