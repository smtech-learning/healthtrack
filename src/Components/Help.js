import React, { Component } from "react";
import Menu from "./Menu";
import { withAuthenticator, ChatBot, AmplifyTheme } from "aws-amplify-react";
import styled, { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { device } from "./device";

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#11698E'
  }
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

const HelpInputSection = styled.div`
  @media ${device.tablet} {
    max-width: 600px;
    margin: 40px;
  }
  margin: 40px;
  max-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

class Help extends Component {
  handleComplete(err, confirmation) {
    if (err) {
      alert("Bot conversation failed");
      return;
    }
    alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "Appointment booked. Thank you! What would you like to do next?";
  }
  render() {
    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <HelpInputSection>
           
              <ChatBot
                title='Your questions answered 24 X 7 X 365'
                theme={myTheme}
                botName='BookTrip_beta'
                welcomeMessage='I am your human like asistant...how can I help you today?'
                onComplete={this.handleComplete.bind(this)}
                clearOnComplete={true}
              />
           
          </HelpInputSection>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

export default Help;

//Blue section back ground :  <Wrapper>  </Wrapper>