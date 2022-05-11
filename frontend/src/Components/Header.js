import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/rent">Rent</NavLink>
            <NavLink to="/sell">Sell</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </div>
    )
}