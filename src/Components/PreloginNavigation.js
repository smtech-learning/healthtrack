import React, { Fragment } from "react";
import styled from "styled-components";
import { device } from "./device";
import logo from "../Images/cloudthoughts-3.png";
import logoVishnu from "../Images/cloudthoughts-5.png";

import { Route, Switch, Link } from "react-router-dom";
import HamburgerMenu from "../Components/HamburgerMenu";
import { useParams, useHistory } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export default function PreloginNavigation() {
  const history = useHistory();
  console.log(history);

  const Nav = styled.nav`
    background: white;
    display: flex;
    flex-direction: row;
    @media ${device.tablet} {
      justify-content: space-between;
    }
    justify-content: flex-end;
  `;

  const UnorderedList = styled.ul`
    list-style: none;

    @media ${device.tablet} {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    display: none;
  `;

  const LineItem = styled.li`
    margin: 0 10px;
    font-size: 1.5rem;
    padding: 10px;
  `;

  const a = styled.a`
    color: #fff;
  `;

  const Image = styled.img`
    width: 200px;
    height: 100px;
  `;

  return (
    <Fragment>
      <Nav>
        <Link to='/'>
          <Image src={logo} alt='logo' />
        </Link>
        <HamburgerMenu />

        <UnorderedList>
          <LineItem>
            <Link to='/' className='main-menu-center-both'>
              <FaHome className='social-icon-menu fa-1x' /> Home
            </Link>
          </LineItem>
          <LineItem>
            <Link to='/login' className='main-menu-center-both'>
              <FaSignInAlt className='social-icon-menu fa-1x' /> Login
            </Link>
          </LineItem>
          <LineItem>
            <Link to='/register' className='main-menu-center-both'>
              <FaKeyboard className='social-icon-menu fa-1x' /> Register
            </Link>
          </LineItem>

          <LineItem>
            <Link to='/architecture' className='main-menu-center-both'>
              <FaPencilAlt className='social-icon-menu fa-1x' /> Architecture
            </Link>
          </LineItem>
          <LineItem>
            <Link to='/services' className='main-menu-center-both'>
              <FaAws className='social-icon-menu fa-1x' /> Services
            </Link>
          </LineItem>
          <LineItem>
            <Link to='/help' className='main-menu-center-both'>
              <FaQuestionCircle className='social-icon-menu fa-1x' /> Help
            </Link>
          </LineItem>
        </UnorderedList>
      </Nav>
    </Fragment>
  );
}
