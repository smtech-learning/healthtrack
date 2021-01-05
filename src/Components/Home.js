import React, { Component, useState, useEffect } from 'react'
import Menu from './Menu';
import { Route, Switch } from 'react-router-dom';
import DisplayProducts from './DisplayProducts';
import SearchProducts from './SearchProduct';
import Help from './Help';
import Logout from './Logout';
import NotFound from './NotFound';
import { withRouter } from 'react-router-dom';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut ,AmplifySignIn} from '@aws-amplify/ui-react';
import { Authenticator } from "aws-amplify-react";
import Login from './Login';
import LoginContainer from './LoginNextGen';
import Amplify from "aws-amplify";
import awsmobile from "../aws-exports";
import PreloginNavigation from "./PreloginNavigation";
import SidebarMenu from "../Components/SidebarMenu";
import styled from "styled-components";
import { device } from "./device";
import LoginBig from "../Images/login.jpg";
import LoginWithKeyboard from "../Images/login-with-key.jpg";
import Footer from "./Footer";
import {SignIn} from 'aws-amplify-react'
import { Auth, Hub } from 'aws-amplify'
import NotLoggedIn from './Notloggedin';



function Home() {
  const [user, updateUser] = useState(null)
  const [isAuthenticated, userHasAuthenticated] = useState(null);
  useEffect(() => { isUserAuthenticated() }, [])

  async function isUserAuthenticated() {
    try {
      await Auth.currentAuthenticatedUser();
      userHasAuthenticated('Yes');
    }
    catch (e) {
      if (e !== 'No current user') {
        userHasAuthenticated('No');
        console.log(e)
      }
    }
  }
  
  async function checkUser() {
    try {
      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      }).then(user => console.log('from home component' + user))
        .catch(err => console.log(err));
      updateUser(user)
    } catch (err) {
      //updateUser(null);
    }
  }
  return (
    <div> 
    {isAuthenticated === 'Yes' && (
      <div>
        <Menu />
        <Switch>
          <Route path="/home/searchProducts" component={SearchProducts} />
          <Route path='/home/addProducts' exact component={DisplayProducts} />
          <Route path='/home/help' exact component={Help} />
          <Route path='/home/logout' exact component={Logout} />
          <Route render={() => { return (<h1> Select the Item above</h1>) }} />
        </Switch>
      </div>
      )}
      
      {isAuthenticated === 'No' && (
        <div>
          <NotLoggedIn/>
        </div>
        )}
    </div>
  
  )
}

export default Home;

// <AmplifyAuthenticator>
//<AmplifySignIn slot="sign-in" hideSignUp></AmplifySignIn>
//The following code helps to use our own login page

//<Authenticator hideDefault={true} amplifyConfig={awsmobile}> 
//  <Login override={'SignIn'} />
 // <AmplifySignOut/>