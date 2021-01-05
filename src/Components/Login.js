import React, { Component, useState , useEffect} from "react";
import "../Styles/Custom.css";
import serverlessarch from "../Images/server-less-arch.png";
import {
  Route,
  Link,
  withRouter,
  Switch,
  useHistory,
  useParams
} from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import styled, { ThemeProvider } from "styled-components";
import { device } from "./device";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import ForgotPassword from "./ForgotPassword";
import Buttons from "./Buttons";
import { SignIn } from 'aws-amplify-react'
import awsmobile from "../aws-exports";
import Amplify from "aws-amplify";



const theme = {
  colors: {
    primary: "#0077B5",
    secondary: "#000000"
  }
};

const Wrapper = styled(Card)`
  margin: 20px;
  background: ${props => props.theme.colors.primary};
  padding: 50px;
  border-radius: 5px;
  // box-shadow: 5px 5px 5px gray;
  // box-shadow: 0 2px 50px 0 #0076ff;
  box-shadow: 0 2px 50px 0 #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LoginInputSection = styled.div`
  @media ${device.tablet} {
    max-width: 400px;
  }
  max-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/* The below component is NOT in use I kept fopr some reference code if I were to use plain old CSS versus MaterialUI*/
const LoginWrapper = styled.div`
  margin: 10px;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ButtonsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;

/* The below component is NOT in use I kept fopr some reference code on how to pass a arrow function*/
const Input2 = styled((...props) => <input {...props} />)`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;

/* The below component is NOT in use I kept fopr some reference code on how to add attributes*/

const Input3 = styled.input.attrs({ value: props => props.value })`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;
const StyledTextField = styled(TextField)`
  font-size: 40;
`;

const initialFormState = {
  userName: '', 
  password: '',
  email: '',
  authCode: '',
  formType: 'signUp',

}

Amplify.configure(awsmobile);

function Login() {
  const [hasError, setHasError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [formState, updateFormState] = useState(initialFormState)
  const [user, updateUser] = useState(null)
  const [isAuthenticated, userHasAuthenticated] = useState(null);
  

  const history = useHistory();
  
  useEffect(() => { isUserAuthenticated() }, []);

  async function checkUser() {
    try {

      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
        .catch(err => console.log(err));
      updateUser(user)
      setHasLoggedIn(true)
    } catch (err) {
      //updateUser(null); 
    }
  }

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

  function onChange(e) {
    e.persist();
    updateFormState(() => (
      {...formState, [e.target.name] : e.target.value}
    ))
  }
  
  const { formType } = formState

  const handlechnage = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const PageLogin = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
        .catch(err => console.log(err));
        history.push("/home");
    } catch (e) {
      setHasError(true);
      setErrorDescription(e.message);
    }
  };

  const GoogleLogin = async e => {
    e.preventDefault();
    try {
      await Auth.federatedSignIn({ provider: "Google" })
      history.push("/home");
    } catch (e) {
      setHasError(true);
      setErrorDescription(e.message);
    } finally {
      
    }
  }; 

  return (
    <div>  
      {isAuthenticated==='No' && (
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <LoginInputSection>
              <Wrapper>
                {hasError && <h5 className='errorStyle'> {errorDescription}</h5>}
                <form>
                  <div className='text-center social-btn'>
                    <a
                      href='#'
                      onClick={GoogleLogin}
                      className='btn btn-primary btn-block'
                    >
                      <i className='fa fa-google'></i> Sign in with <b>Google</b>
                    </a>
                  </div>
                  <div className='or-seperator'>
                    <i>or</i>
                  </div>
                  <div className='form-group'>
                    <div className='input-group'>
                      <span className='input-group-addon'>
                        <i className='fa fa-user'></i>
                      </span>
                      <input
                        type='text'
                        className='form-control'
                        name='email'
                        placeholder='Enter user id'
                        required='required'
                        onChange={handlechnage}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group'>
                      <span className='input-group-addon'>
                        <i className='fa fa-lock'></i>
                      </span>
                      <input
                        type='password'
                        className='form-control'
                        name='password'
                        placeholder='Enter Password'
                        required='required'
                        onChange={handlechnage}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <button
                      type='submit'
                      className='btn btn-success btn-block login-btn'
                      onClick={PageLogin}
                    >
                      Sign in
                </button>
                  </div>

                  <div className='clearfix'>
                    <Link to='/forgotpassword' className='pull-right text-success'>
                      Forgot Password?
                </Link>
                  </div>

                  <div className='hint-text small'>
                    Don't have an account?
                <Link to='/register' className='text-success'>
                      Register Now!
                </Link>
                  </div>
                </form>
              </Wrapper>
            </LoginInputSection>
          </ThemeProvider>
        </StylesProvider>
      )}
      {isAuthenticated==='Yes' &&
        history.push("/home")
      }
      </div>
  );
}

export default Login;
