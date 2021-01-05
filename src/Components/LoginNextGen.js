import React from "react";
import PreloginNavigation from "./PreloginNavigation";
import Register from "./Register";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import SidebarMenu from "../Components/SidebarMenu";
import styled from "styled-components";
import { device } from "./device";
import LoginBig from "../Images/login.jpg";
import LoginWithKeyboard from "../Images/login-with-key.jpg";
import RegisterCloudImage from "../Images/Cloud-Road.jpeg";
import HelpImage from "../Images/help.jpg";
import Help from "./Help";
import ForgotPassword from "./ForgotPassword";
import Architecture from "./Architecture";
import Services from "./Services";
import Slider from "../Components/Slider";
import Home from "./Home";

export default function LoginNextGen() {
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

  const RegisterBackground = styled.div`
    grid-area: body;
    @media ${device.tablet} {
      background-image: url(${RegisterCloudImage});
    }
    background-image: url(${RegisterCloudImage});
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

  const ArchitectureBackground = styled.div`
    grid-area: body;
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
  `;

  const HelpBackground = styled.div`
    grid-area: body;
    @media ${device.tablet} {
      background-image: url(${HelpImage});
    }
    background-image: url(${HelpImage});
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

  const HomeBackground = styled.div`
    grid-area: body;
    @media ${device.tablet} {
      background-color: #ccc;
    }
    background-color: #ccc;
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

  return (
    <div className='login-container'>
      <div className='header-item'>
        <PreloginNavigation />
      </div>
      <SidebarMenu />
      <Switch>
        <Route path='/' exact>
          <HomeBackground>
            <Slider />
          </HomeBackground>
        </Route>
        <Route path='/login'>
          <LoginBackground>
            <Login />
          </LoginBackground>
        </Route>
        <Route path='/forgotpassword'>
          <LoginBackground>
            <ForgotPassword />
          </LoginBackground>
        </Route>
        <Route path='/register'>
          <RegisterBackground>
            <Register />
          </RegisterBackground>
        </Route>
        <Route path='/architecture'>
          <ArchitectureBackground>
            <Architecture />
          </ArchitectureBackground>
        </Route>
        <Route path='/services'>
          <ArchitectureBackground>
            <Services />
          </ArchitectureBackground>
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/help'>
          <HelpBackground>
            <Help />
          </HelpBackground>
        </Route>
      </Switch>

      <div className='footer-item'>
        <div>
          <a href='mailto: munnangicloud@gmail.com'>munnangicloud@gmail.com</a>
        </div>
        <Footer />
      </div>
    </div>
  );
}
