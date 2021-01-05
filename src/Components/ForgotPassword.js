import React, { Component, useState } from "react";
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
import { Auth } from "aws-amplify";
import styled, { ThemeProvider } from "styled-components";
import { device } from "./device";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

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

function ForgotPassword() {
  const [hasError, setHasError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState("");
  const [errorcount, setErrorcount] = useState("");
  const [isFormvalid, setIsFormvalid] = useState(false);
  const [signedup, setSignedup] = useState(false);

  const history = useHistory();
  console.log(history);

  const handleChange = event => {
    const { name, value } = event.target;
    let errors = errors;

    console.log("typed event-> " + name);
    switch (name) {
      case "username":
        //     errors.username = validEmailRegex.test(value)
        //       ? ""
        //       : "Email is not valid!";
        //     break;

        setUsername(value);
        break;

      case "password":
        errors.password =
          value.length < 8 ? "Password must be minimum 8 characters long!" : "";
        break;
      default:
        console.log("testing here");
        break;
    }

    setErrors({ errors, [name]: value });

    setErrorcount({ errors });
    setIsFormvalid(isFormValid());
  };

  const countErrors = errors => {
    let count = 0;
    Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
    return count;
  };

  const isFormValid = () => {
    // const { username, password } = this.state;
    if (username.length > 0 && password.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handlesubmit = e => {
    e.preventDefault();
    console.log("in else condition 1st");

    if (!signedup) {
      Auth.forgotPassword(username)
        .then(data => {
          console.log(data);
          setSignedup(true);
        })
        .catch(err => {
          setHasError(true);
          setErrorDescription(err.message);
        });
    }
    //else if (signedup && !confirmed) {
    //   const { username, confirmation_code } = this.state;
    //   Auth.confirmSignUp(username, confirmation_code, {
    //     forceAliasCreation: true
    //   })
    //     .then(data => {
    //       this.setState({ confirmed: true });
    //       this.setState({ username: "", email: "", confirmation_code: "" });
    //     })
    //     .catch(err => {
    //       this.setState({ hasError: true });
    //       this.setState({ errorDescription: err.message });
    //     });
    // } else if (signedup && confirmed) {
    //   console.log("in else condition - 4th");
    // }
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LoginInputSection>
          <Wrapper>
            {hasError && <h5 className='errorStyle'> {errorDescription}</h5>}
            <form>
              <div class='form-group'>
                <div class='input-group'>
                  <span class='input-group-addon'>
                    <i class='fa fa-user'></i>
                  </span>
                  <input
                    type='text'
                    class='form-control'
                    name='username'
                    placeholder='Enter user id'
                    required='required'
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class='form-group'>
                <button
                  type='submit'
                  class='btn btn-success btn-block login-btn'
                  onClick={handlesubmit}
                >
                  Send me the code
                </button>
              </div>

              <div class='clearfix'>
                <Link to='/login' className='pull-right text-success'>
                  Login Instaed ?
                </Link>
              </div>

              <div class='hint-text small'>
                Don't have an account?
                <Link to='/register' class='text-success'>
                  Register Now!
                </Link>
              </div>
            </form>
          </Wrapper>
        </LoginInputSection>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default ForgotPassword;
