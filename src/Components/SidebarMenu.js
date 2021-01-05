import React, { useState, useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "./device";
import { Context } from "./ContextOneProvider";
import {} from "@fortawesome/free-regular-svg-icons";
import { FaSignInAlt } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export default function SidebarMenu() {
  const { show, toggleShow } = useContext(Context);

  const SidebarDiv = styled.div`
  
    position: absolute;
    z-index:99
    width: 300px;
    height: 75.5%;
    // background: #3e88a3  -> This is the color of the background image itself so not using this color but keeping here for reference.
    background: #333
    // left: ${props =>
      show
        ? "0px"
        : "-300px"}; Not using this way because this calls for a component 
    //re-render and when the component re-renders the transition property is not working.
    left:-300px;
    &.active{
     
        left:0px;
        box-shadow: 0 2px 50px 0 #0076ff;

    }
    top: 100px;
    display: flex;
    display-direction: row;
    justify-content: space-between;
    transition: all 500ms ease;

  `;

  const SpecialSidebarDiv = styled(SidebarDiv)`
    transition: all 500ms ease;
  `;

  const SidebarLineItem = styled.li`
    list-style: none;
    color: #fff;
    font-size: 20px;
    padding: 20px 24px;
  `;

  const toggleShow1 = () => {
    document.getElementById("sidebar").classList.remove("active");
  };

  return (
    <SpecialSidebarDiv id='sidebar' className={show ? "active" : ""}>
      <ul>
        <SidebarLineItem>
          <Link to='/'>
            <FaSignInAlt className='social-icon-sidebar-menu fa-2x' />
            <span className='sidebar-menu-pointer'> Home</span>
          </Link>
        </SidebarLineItem>
        <SidebarLineItem>
          <Link to='/login'>
            <FaSignInAlt className='social-icon-sidebar-menu fa-2x' />
            <span className='sidebar-menu-pointer'> Login</span>
          </Link>
        </SidebarLineItem>
        <SidebarLineItem>
          <Link to='/register'>
            <FaKeyboard className='social-icon-sidebar-menu fa-2x' />
            <span className='sidebar-menu-pointer'> Register</span>
          </Link>
        </SidebarLineItem>
        <SidebarLineItem>
          <Link to='/architecture'>
            <span className='sidebar-menu-pointer'>
              <FaPencilAlt className='social-icon-sidebar-menu fa-2x' />
              <span className='sidebar-menu-pointer'> Architecture</span>
            </span>
          </Link>
        </SidebarLineItem>
        <SidebarLineItem>
          <Link to='/services'>
            <span className='sidebar-menu-pointer'>
              <FaAws className='social-icon-sidebar-menu fa-2x' />
              <span className='sidebar-menu-pointer'> Services</span>
            </span>
          </Link>
        </SidebarLineItem>
        <SidebarLineItem>
          <Link to='/help'>
            <FaQuestionCircle className='social-icon-sidebar-menu fa-2x' />
            <span className='sidebar-menu-pointer'> Help </span>
          </Link>
        </SidebarLineItem>
      </ul>

      <ul>
        <SidebarLineItem>
          <span id='close' onClick={toggleShow1}>
            <FaTimesCircle className='social-icon-sidebar-menu fa-2x' />
          </span>
        </SidebarLineItem>
      </ul>
    </SpecialSidebarDiv>
  );
}
