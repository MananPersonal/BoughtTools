import React from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/rent">Rent</NavLink>
                <NavLink to="/sell">Sell</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        )
    }
}