import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Parallax1 from "../Images/AWS-serverless-thecloudthoughts.jpeg";
import Parallax4 from "../Images/cloud-background.jpg";
import Parallax5 from "../Images/cloud-image-analystics.jpg";
import Parallax6 from "../Images/cloud-blackboard-stock.jpg";

import Parallax3 from "../Images/cloud-bkgd-image.jpeg";
import ServerlessApiImage from "../Images/Cloud-image-good-one.jpeg";
import ServerlessArchImage1 from "../Images/AWS-serverless-thecloudthoughts.jpeg";
import webhosting from "../Images/route53.jpg";
import domaindiagram from "../Images/domain-diagram.jpeg";
import route53 from "../Images/route53.png";

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
  padding-top: 10px;
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
  background-image: url(${ServerlessApiImage});
  background-color: skyblue;
  min-height: 400px;
`;

const BgImage2 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${webhosting});
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

const BgImage4 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax4});
  min-height: 400px;
`;

const BgImage5 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax5});
  min-height: 400px;
`;

const BgImage6 = styled.div`
  ${BigImage}
  @media only screen and (max-device-width: 1024px) {
    background-attachment: scroll;
  }
  background-image: url(${Parallax6});
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

const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 3rem;
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
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          ></Span>
        </Caption>
      </BgImage1>

      <ParallaxStyle>
        <p style={{ marginTop: ".1rem" }}>
          <span style={{ fontSize: "30px" }}>H</span>osting a software
          application on the internet usually involves managing some kind of
          server infrastructure. Typically this means a virtual or physical
          server that needs to be managed, as well as the operating system and
          other web server hosting processes required for your application to
          run. Using a virtual server from a cloud provider such as Amazon or
          Microsoft does mean the elimination of the physical hardware concerns,
          but still requires some level of management of the operating system
          and the web server software processes.
        </p>

        <p style={{ marginTop: ".1rem" }}>
          <strong>Serverless applications </strong>don’t require you to
          provision, scale, and manage any servers. You can build them for
          nearly any type of application or backend service, and everything
          required to run and scale your application with high availability is
          handled for you. Serverless architectures can be used for many types
          of applications. For example, you can process transaction orders,
          analyze click streams, clean data, generate metrics, filter logs,
          analyze social media, or perform IoT device data telemetry and
          metering.
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
          <Image src={ServerlessArchImage1} alt='' />
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
            <strong> Scroll up to see Domain hosting architecture</strong>
          </Span>
        </Caption>
      </BgImage2>

      <ParallaxStyle>
        <p style={{ marginTop: ".1rem" }}>
          <h1> Domain by GoDaddy, DNS by Route53</h1>
          <span style={{ fontSize: "30px" }}>F</span>or any webapplication to be
          available over internet, we need to purchase a Domain and the domain
          needs to be hosted. A public hosted zone is a container that holds
          information about how you want to route traffic on the internet for a
          specific domain, such as cloudthoughts.com, and its subdomains
          api.cloudthoughts.com. Domain registration is a process by which a
          registrar such as GoDaddy negotiates with ICANN (Internet Corporation
          for Assigned Names and Numbers) to register a domain name on your
          behalf.
        </p>
        <p style={{ marginTop: "1.9rem" }}>
          DNS services are offered by GoDaddy, but you don’t have to use them.
          If you want more flexibility, scalability, etc. you could use another
          DNS service such as AWS Route53, Google Cloud DNS, NS1, etc. This
          architecture picked Route53 since this is being hosted on Cloudfront.
          After you create a hosted zone, you create records that specify how
          you want to route traffic for the domain and subdomains.
          <Image src={domaindiagram} alt='' />
        </p>

        <p>
          <strong>
            <i>
              Here is how you would configure domain and sub domains in AWS
              Route53.
            </i>
          </strong>
        </p>
        <Image src={route53} alt='' />
      </ParallaxStyle>

      {/* 
      <div style={{ position: "relative" }}>
        <ScrollUpStyle>
          <p>
            Scroll up and down to really get the feeling of how Parallax
            Scrolling works.
          </p>
        </ScrollUpStyle>
      </div>
      */}
      <BgImage3>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            <strong>
              <i>
                Scroll Up to see architecture on analytics using Kenesis (still
                serverless)
              </i>
            </strong>
          </Span>
        </Caption>
      </BgImage3>
      <ParallaxStyle>
        <p style={{ marginTop: ".1rem" }}>
          <h1> Yet to update the conetnt</h1>
          Serverless is not just limitted to webapplications, you could use the
          serverless offerings to build a real time analytics platform and/or
          processing real time data stream.
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
          <Image src={ServerlessArchImage1} alt='' />
        </p>
      </ParallaxStyle>

      <BgImage4>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            <strong>
              {" "}
              Scroll up to see details on API on Springboot, CI/CD architecture
              for back end.
            </strong>
          </Span>
        </Caption>
      </BgImage4>
      <ParallaxStyle>
        <p style={{ marginTop: ".1rem" }}>
          <h1> Yet to update the conetnt</h1>
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
          <Image src={ServerlessArchImage1} alt='' />
        </p>
      </ParallaxStyle>

      <BgImage5>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            <strong>
              Scroll up to see details on front-end using React, CI/CD
              architecture for front end.
            </strong>
          </Span>
        </Caption>
      </BgImage5>
      <ParallaxStyle>
        <p style={{ marginTop: ".1rem" }}>
          <h1> Yet to update the conetnt</h1>
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
          <Image src={ServerlessArchImage1} alt='' />
        </p>
      </ParallaxStyle>
      <BgImage6>
        <Caption>
          <Span
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              color: "#f7f7f7"
            }}
          >
            <strong>
              {" "}
              <i> The End</i>
            </strong>
          </Span>
        </Caption>
      </BgImage6>
    </MainDiv>
  );
};
export default Architecture;
