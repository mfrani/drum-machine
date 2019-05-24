import React from "react";
import Keys from "./Keys";
import Display from "./Display";
import { Wrapper } from "../styles/styles";

class Drumpad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      name: ""
    };
  }

  handleClick = (key, name) => {
    this.setState({
      key,
      name
    });
    this.play(key);
  };

  play = key => {
    const audio = document.getElementById(key);
    audio.load();
    audio.play();
  };

  onKeyPressed = event => {
    switch (event.key) {
      case "q":
        this.setState({ key: "q", name: "punch-kick-1" });
        this.play(this.state.key);
        break;
      case "w":
        this.setState({ key: "w", name: "Heater-2" });
        this.play(this.state.key);
        break;
      case "e":
        this.setState({ key: "e", name: "Dsc-Oh" });
        this.play(this.state.key);
        break;
      case "a":
        this.setState({ key: "a", name: "Give-us-a-light" });
        this.play(this.state.key);
        break;
      case "s":
        this.setState({ key: "s", name: "Chord-1" });
        this.play(this.state.key);
        break;
      case "d":
        this.setState({ key: "d", name: "Chord-2" });
        this.play(this.state.key);
        break;
      default:
        return;
    }
  };

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }
  render() {
    return (
      <Wrapper onKeyDown={this.onKeyPressed} tabIndex="0">
        <Keys handleClick={this.handleClick} />
        <br />
        <Display key={this.state.key} name={this.state.name} />
      </Wrapper>
    );
  }
}

export default Drumpad;
