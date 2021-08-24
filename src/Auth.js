import React, { Component } from 'react';

import { getToken } from './fetch-utils.js';

class Auth extends Component {
    state = { email: '', password: '' }
    getType = () => {
        return this.props.type === 'login' ? 'Log In' : 'Sign Up';
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getToken(
            {email: this.state.email,
            password: this.state.password,},
            this.props.type
        );
        this.props.setToken(token);
        this.props.history.push('/todos');
    };

    render() { 
        return ( 
            <>
            <h1>{this.getType()}</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type="password"
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                    />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        type="password"
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                    />
                </div>
                
                <button>{this.getType()}</button>
            </form>
      
        </>  
         );
    }
}
 
export default Auth;