import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
// import Header from './Header.js';
import Auth from './Auth.js';
import ToDos from './ToDos.js';
import './Styles/App.css';
import './Styles/Header.css';



class Home extends Component {
  render() {
    return <h1 className="content">Home Page</h1>;
  }
}

class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN'),
  };
  setToken = (val) => {
    this.setState({ token: val });
  };
  

  render() {
    return (
      <BrowserRouter>
        <header>
          <div>Crewmate Tasks:</div>
          <div className="links">
            <NavLink to="/" exact>Home</NavLink>
            {!localStorage.getItem('TOKEN') ?
            <>
              <NavLink to="/login" exact>Log In</NavLink>
              <NavLink to="/signup" exact>Sign Up</NavLink>
            </>
            :
            <button onClick={() => {
              localStorage.removeItem('TOKEN');
              window.location.replace('/');
            }}>Log Out</button>
            }
          </div>

        </header>
        <section className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={(routerProps) => (
              <Auth setToken={this.setToken} type="signin" {...routerProps} />
            )}
          />

          <Route path="/signup" render={(routerProps) => (
            <Auth setToken={this.setToken} type="signup" {...routerProps} />
            )}
          />
          
          <Route path="/todos" render={(routerProps) => this.state.token ? (
            <ToDos token={this.state.token} {...routerProps} /> ) : (
              <Redirect to="/login" />
            )
          } />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
