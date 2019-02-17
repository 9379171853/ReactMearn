import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/user'>User</NavLink></li>
      <li><NavLink to='/registration'>Registration</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>  
      <li><NavLink to="/login">Login</NavLink></li>    
    </ul>
  </nav>
);
   