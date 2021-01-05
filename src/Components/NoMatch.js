import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("../Images/login.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100%;
`;

export default class NoMatch extends Component {
  render() {
    return (
      <Container>
        <h1> No Match </h1>
      </Container>
    );
  }
}
