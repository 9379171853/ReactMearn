import React, { Component } from 'react';
import './Login.css'
class Login extends Component{

    sublitLoginForm(e) {
        e.preventDefault();
        alert("Form Submitted")
    }

    render(){
        return(
        <div>            
            <div id="login">
                <input type="email" id="email" placeholder="Email"/>
                <input type="password" id="password" placeholder="Password"/>
                <button type = "submit" id="send" onClick={this.sublitLoginForm}>Login</button>
            </div>
        </div>
        );
    }

}

export default Login