import React, { Component } from 'react';
import { Link} from "react-router-dom"

const Header = () => {
    const headerStyle = {
        background:"#333",
        color: "#fff",
        textAlign: "center",
        padding:"10px"
    }
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={{color:"white"}} to="/">Home</Link> | <Link style={{color:"white"}} to="/about">About</Link>
            
        </header>
      );
}
 
export default Header;

// https://jsonplaceholder.typicode.com/todos