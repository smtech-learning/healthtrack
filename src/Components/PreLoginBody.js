import React, { Fragment } from "react";
import styled from "styled-components";
import { device } from "./device";
import Slider from "../Components/Slider";

export default function PreLoginBody() {
  const CenterCredentialsBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Fragment>
      <CenterCredentialsBox></CenterCredentialsBox>
    </Fragment>
  );
}
