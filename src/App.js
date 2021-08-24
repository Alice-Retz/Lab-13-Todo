import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header.js';
import Auth from './Auth.js';
import ToDos from './ToDos.js';
import './Styles/App.css';



class Home extends Component {
  render() {
    return <h1>Home Page</h1>;
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
        <Header />
        <section className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={(routerProps) => (
              <Auth setToken={this.setToken} type="login" {...routerProps} />
            )}
          />

          <Route path="/signup" render={(routerProps) => (
            <Auth setToken={this.setToken} type="signup" {...routerProps} />
            )}
          />
          
          <Route path="/todos" render={(routerProps) => this.state.token ? (
            <ToDos {...routerProps} /> ) : (
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
