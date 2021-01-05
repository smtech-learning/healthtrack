import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import LoginNextGen from "./Components/LoginNextGen";
import Home from "./Components/Home";
import Register from "./Components/Register";

import {
  BrowserRouter,
  Route,
  NavLink,
  withRouter,
  Switch
} from "react-router-dom";

class App extends Component {

  render() {
  
    return (
      <div> 
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={LoginNextGen} />
          <Route path='/login' exact component={LoginNextGen} />
          <Route path='/register' component={LoginNextGen} />
          <Route path='/architecture' component={LoginNextGen} />
          <Route path='/forgotpassword' component={LoginNextGen} />
          <Route path='/services' component={LoginNextGen} />
          <Route path='/help' component={LoginNextGen} />
          <Route path='/home' component={Home} />
        </Switch>
        </BrowserRouter>
        </div>
        
    );
  }
}
export default App;
