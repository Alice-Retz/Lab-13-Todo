import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/Login">Login</NavLink>
                    <NavLink to="/Signup">Sign up</NavLink>
                    APP TOKEN:
                    {this.state.token && this.state.token.toString()}
                </div>
            </header>
         );
    }
}
 
export default Header;