import React, { Component } from "react";
const Context = React.createContext();

class ContextOneProvider extends Component {
  state = {
    show: false
  };

  toggleShow = () => {
    this.setState(prevState => {
      return {
        show: prevState.show ? false : true
      };
    });
  };

  render() {
    return (
      <Context.Provider
        value={{ show: this.state.show, toggleShow: this.toggleShow }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { ContextOneProvider, Context };
