import React, { Component } from 'react'
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
import Login2 from './Login-backup';
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


Amplify.configure(awsmobile);

const LoginBackground = styled.div`
grid-area: body;
@media ${device.tablet} {
  background-image: url(${LoginBig});
}
background-image: url(${LoginWithKeyboard});
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: top left;
display: flex;
flex-direction: row;
@media ${device.tablet} {
  justify-content: flex-end;
}
justify-content: flex-start;
/* align-items: center; */
`;

export default class Home extends Component {
  
  render(props) {
    return (
      <div>
          <div className='login-container'>
            <div className='header-item'>
              <PreloginNavigation/>
            </div>
            <SidebarMenu />
            <LoginBackground  > 
            <Login2 />
          </LoginBackground>
          
          <div className='footer-item'>
          <div>
            <a href='mailto: munnangicloud@gmail.com'>munnangicloud@gmail.com</a>
          </div>
          <Footer />
          </div>
          </div>
        
        <div>
              <Menu />  
              <Switch> 
                <Route path="/home/searchProducts"  component={SearchProducts} />
                <Route path='/home/addProducts' exact component={DisplayProducts} />
                <Route path='/home/help' exact component={Help} />
                <Route path='/home/logout' exact component={Logout} />
                  <Route render={() => { return (<h1> Select the Item above</h1>) }} />
              </Switch>
        </div>
        </div>
       
    )
  }
}

// <AmplifyAuthenticator>
//<AmplifySignIn slot="sign-in" hideSignUp></AmplifySignIn>
//The following code helps to use our own login page

//<Authenticator hideDefault={true} amplifyConfig={awsmobile}> 
//  <Login override={'SignIn'} />
 // <AmplifySignOut/>