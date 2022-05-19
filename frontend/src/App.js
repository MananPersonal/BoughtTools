import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Rent from './Components/Rent';
import Sell from './Components/Sell';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/rent" element={<Rent/>}/>
                        <Route path="/sell" element={<Sell/>}/>
                    </Routes>
                </main>
            </Router>
        );
    }
}

export default App;
