import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
   <Router className="App">
     <Header />
     <main>
     <Button variant='contained'>BAB</Button>
     </main>
   </Router>
  );
}

export default App;
