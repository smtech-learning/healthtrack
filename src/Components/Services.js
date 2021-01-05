import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Parallax1 from "../Images/ServerlessAPIs-using-Lambda.png";
import Parallax2 from "../Images/ServerlessAPIs-using-Lambda.png";
import Parallax3 from "../Images/ServerlessAPIs-using-Lambda.png";
import ServerlessApiImage from "../Images/ServerlessAPIs-using-Lambda.png";

// body, html {
//     height: 100%;
//     margin: 0;
//     font: 400 15px/1.8 "Lato", sans-serif;
//     color: #777;
//   }

const MainDiv = styled.div`
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 "Lato", sans-serif;
  color: #777;
`;

const BigImage = `
  position: relative;
  opacity: 0.65;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxStyle = styled.div`
  color: #777;
  background-color: white;
  text-align: center;

  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 10px;
  text-align: justify;
`;

const LessHeightStyle = styled.div`
  background-color: transparent;
  font-size: 25px;
  color: #f7f7f7;
`;

const ScrollUpStyle = styled.div`
  color: #ddd;
  background-color: #282e34;
  text-align: center;
  padding: 50px 80px;
  text-align: justify;
`;

const BgImage1 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax1});
  min-height: 100%;
`;

const BgImage2 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax2});
  background-color: skyblue;
  min-height: 400px;
`;

const BgImage3 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax3});
  min-height: 400px;
`;

const Caption = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
`;

const Span = styled.span`
  background-color: #8ae1fc;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 5px;
`;

const H3 = styled.h3`
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
`;

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

//   /* Turn off parallax scrolling for tablets and phones */
//   @media only screen and (max-device-width: 1024px) {
//     .bgimg-1, .bgimg-2, .bgimg-3 {
//       background-attachment: scroll;
//     }
//   }

const Architecture = () => {
  return (
    <MainDiv>
      <BgImage1>
        <Caption>
          <Span>Cloud Service Offerings</Span>
        </Caption>
      </BgImage1>
      {/*
        <Video autoplay loop id='myVideo'>
         <source src={video} type='video/mp4' />
         Your browser does not support HTML5 video.
         </Video>
      */}
      <ParallaxStyle>
        {/* <H3 style={{ textAlign: "center" }}>Parallax Demo</H3> */}
        <p style={{ marginTop: "1.9rem" }}>
          Hosting a software application on the internet usually involves
          managing some kind of server infrastructure. Typically this means a
          virtual or physical server that needs to be managed, as well as the
          operating system and other web server hosting processes required for
          your application to run. Using a virtual server from a cloud provider
          such as Amazon or Microsoft does mean the elimination of the physical
          hardware concerns, but still requires some level of management of the
          operating system and the web server software processes.
        </p>
        <p style={{ marginTop: "1.9rem" }}>
          With a <strong> Serverless Architecture</strong>, you focus purely on
          the individual functions in your application code. Services such as
          AWS Lambda and Microsoft Azure Functions take care of all the physical
          hardware, virtual machine operating system, and web server software
          management. You only need to worry about your code isn't it awesome ?
          Lets dive a bit deeper on the architecture on how you could build a
          dynamic website fully fucntional that takes care of Hosting, Security,
          Storage, Database, APIs so on and soforth and this article would focus
          mainly on AWS offerings.
        </p>
      </ParallaxStyle>

      <BgImage2>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            LESS HEIGHT
          </Span>
        </Caption>
      </BgImage2>

      <div style={{ position: "relative" }}>
        <ScrollUpStyle>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </ScrollUpStyle>
      </div>

      <BgImage3>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            SCROLL UP
          </Span>
        </Caption>
      </BgImage3>
      <div style={{ position: "relative" }}>
        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "center",
            padding: "50px 80px",
            textAlign: "justify"
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>

      <BgImage3>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            SCROLL UP
          </Span>
        </Caption>
      </BgImage3>
      <div style={{ position: "relative" }}>
        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "center",
            padding: "50px 80px",
            textAlign: "justify"
          }}
        >
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </div>
      </div>
    </MainDiv>
  );
};
export default Architecture;
