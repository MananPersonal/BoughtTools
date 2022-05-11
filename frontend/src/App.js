import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
   <Router>
     <Header />
   </Router>
  );
}

export default App;
