import React, { Component } from "react";
import { Auth } from "aws-amplify";
// import registration from "../Images/registration.png";
import styled, { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { device } from "./device";
import {
  Route,
  Link,
  withRouter,
  Switch,
  useHistory,
  useParams
} from "react-router-dom";

const countErrors = errors => {
  let count = 0;
  Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
  console.log("error count" + count);
  return count;
};

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone_number: "",
      confirmation_code: "",
      signedup: false,
      confirmed: false,
      errors: {
        username: "",
        email: "",
        password: "",
        phone_number: ""
      },
      errorcount: "",
      isFormvalid: false
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    console.log("typed event-> " + name);
    switch (name) {
      //   case "username":
      //     errors.username = validEmailRegex.test(value)
      //       ? ""
      //       : "Email is not valid!";
      //     break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;

      //   case "phone_number":
      //     errors.phone_number = validEmailRegex.test(value)
      //       ? ""
      //       : "Phone Number is not valid! REMEMBER : (Format should be: +1XXXXXXXXXX) including +1. For example a valid one is : +18001231234";
      //     break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be minimum 8 characters long!" : "";
        break;
      default:
        console.log("testing here");
        break;
    }

    this.setState({ errors, [name]: value });
    this.setState({ errorcount: countErrors(this.state.errors) });
    this.setState({ isFormValid: this.isFormValid() });
  };
  countErrors = errors => {
    let count = 0;
    Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
    return count;
  };

  isFormValid = () => {
    const { username, password, email, phone_number } = this.state;
    if (
      username.length > 0 &&
      password.length > 0 &&
      email.length > 0 &&
      phone_number.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  handlesubmit(e) {
    e.preventDefault();
    console.log("in else condition 1st");

    const {
      username,
      password,
      email,
      phone_number,
      signedup,
      confirmed
    } = this.state;
    if (!signedup && !confirmed) {
      Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number
        },
        validationData: []
      })
        .then(data => {
          console.log(data);
          this.setState({ signedup: true });
          this.setState({ password: "", email: "", phone_number: "" });
        })
        .catch(err => {
          this.setState({ hasError: true });
          this.setState({ errorDescription: err.message });
        });
    } else if (signedup && !confirmed) {
      const { username, confirmation_code } = this.state;
      Auth.confirmSignUp(username, confirmation_code, {
        forceAliasCreation: true
      })
        .then(data => {
          this.setState({ confirmed: true });
          this.setState({ username: "", email: "", confirmation_code: "" });
        })
        .catch(err => {
          this.setState({ hasError: true });
          this.setState({ errorDescription: err.message });
        });
    } else if (signedup && confirmed) {
      console.log("in else condition - 4th");
    }
  }

  render() {
    if (!this.state.signedup) {
      const { errors, errorcount, isFormValid } = this.state;

      return (
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <LoginInputSection>
              <Wrapper>
                <form onSubmit={this.handlesubmit} autoComplete='off'>
                  {this.state.hasError && (
                    <h5 className='errorStyle'>
                      {this.state.errorDescription}
                    </h5>
                  )}

                  <div class='form-group'>
                    <div class='input-group'>
                      <span class='input-group-addon'>
                        <i class='fa fa-user'></i>
                      </span>
                      <input
                        type='text'
                        class='form-control'
                        autocomplete='off_randomstring'
                        name='username'
                        placeholder='Enter user id (min 8 length)'
                        required='required'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  {errors.username.length > 0 && (
                    <span className='errorStyle'>{errors.username}</span>
                  )}

                  <div class='form-group'>
                    <div class='input-group'>
                      <span class='input-group-addon'>
                        <i class='fa fa-user'></i>
                      </span>
                      <input
                        type='text'
                        class='form-control'
                        autocomplete='off_randomstring'
                        name='email'
                        placeholder='Enter e-mail address'
                        required='required'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  {errors.email.length > 0 && (
                    <span className='errorStyle'>{errors.email}</span>
                  )}

                  <div class='form-group'>
                    <div class='input-group'>
                      <span class='input-group-addon'>
                        <i class='fa fa-user'></i>
                      </span>
                      <input
                        type='password'
                        class='form-control'
                        autocomplete='off_randomstring'
                        name='password'
                        placeholder='Enter Password (minimum 8 characters is needed)'
                        required='required'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  {errors.password.length > 0 && (
                    <span className='errorStyle'>{errors.password}</span>
                  )}

                  <div class='form-group'>
                    <div class='input-group'>
                      <span class='input-group-addon'>
                        <i class='fa fa-user'></i>
                      </span>
                      <input
                        type='text'
                        class='form-control'
                        autocomplete='off_randomstring'
                        name='phone_number'
                        placeholder='Enter Phone Number (Format should be: +1XXXXXXXXXX)'
                        required='required'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  {errors.phone_number.length > 0 && (
                    <span className='errorStyle'>{errors.phone_number}</span>
                  )}
                  <br />
                  <button
                    className='btn btn-primary'
                    disabled={errorcount > 0 || !isFormValid}
                  >
                    Submit (all 4 fields are manadatory)
                  </button>
                  <div class='clearfix'>
                    <Link to='/login' className='pull-right text-success'>
                      Login Instaed ?
                    </Link>
                  </div>
                </form>
              </Wrapper>
            </LoginInputSection>
          </ThemeProvider>
        </StylesProvider>
      );
    } else if (this.state.signedup && !this.state.confirmed) {
      return (
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <LoginInputSection>
              <Wrapper>
                <form onSubmit={this.handlesubmit} autoComplete='off'>
                  <h5>
                    Stay on this Page. You should have received the verification
                    code in the e-mail. Plese check the e-mail and enter the
                    verification code below and click Submit !
                  </h5>
                  {this.state.hasError && (
                    <h5 className='errorStyle'>
                      {this.state.errorDescription}
                    </h5>
                  )}

                  <div class='form-group'>
                    <div class='input-group'>
                      <span class='input-group-addon'>
                        <i class='fa fa-user'></i>
                      </span>
                      <input
                        type='text'
                        class='form-control'
                        autocomplete='off_randomstring'
                        name='confirmation_code'
                        placeholder='Enter Verification Code'
                        required='required'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <br />
                  <button className='btn btn-primary'> Submit </button>
                </form>
              </Wrapper>
            </LoginInputSection>
          </ThemeProvider>
        </StylesProvider>
      );
    } else if (this.state.signedup && this.state.confirmed) {
      return (
        <div className='register-container'>
          <div className='form-container'>
            <h3> Congratulations !! Registration successfully completed. </h3>
            <br />
            <button className='btn btn-primary'> Go to Login Page </button>
          </div>
        </div>
      );
    }
  }
}
export default Register;
