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
        document.getElementsByClassName("q")[0].classList.add("active");
        this.play(this.state.key);

        break;
      case "w":
        this.setState({ key: "w", name: "Heater-2" });
        document.getElementsByClassName("w")[0].classList.add("active");
        this.play(this.state.key);
        break;
      case "e":
        this.setState({ key: "e", name: "Dsc-Oh" });
        document.getElementsByClassName("e")[0].classList.add("active");
        this.play(this.state.key);
        break;
      case "a":
        this.setState({ key: "a", name: "Give-us-a-light" });
        document.getElementsByClassName("a")[0].classList.add("active");
        this.play(this.state.key);
        break;
      case "s":
        this.setState({ key: "s", name: "Chord-1" });
        document.getElementsByClassName("s")[0].classList.add("active");
        this.play(this.state.key);
        break;
      case "d":
        this.setState({ key: "d", name: "Chord-2" });
        document.getElementsByClassName("d")[0].classList.add("active");
        this.play(this.state.key);
        break;
      case "z":
        this.setState({ key: "z", name: "Cev-H2" });
        document.getElementsByClassName("z")[0].classList.add("active");
        this.play(this.state.key);
        break;
      case "x":
        this.setState({ key: "x", name: "punchy-kick-1" });
        document.getElementsByClassName("x")[0].classList.add("active");
        this.play(this.state.key);
        break;
      case "c":
        this.setState({ key: "c", name: "Bld-H1" });
        document.getElementsByClassName("c")[0].classList.add("active");
        this.play(this.state.key);
        break;
      default:
        return;
    }
  };
  onKeyUp = event => {
    switch (event.key) {
      case "q":
        document.getElementsByClassName("q")[0].classList.remove("active");

        break;
      case "w":
        document.getElementsByClassName("w")[0].classList.remove("active");
        break;
      case "e":
        document.getElementsByClassName("e")[0].classList.remove("active");
        break;
      case "a":
        document.getElementsByClassName("a")[0].classList.remove("active");
        break;
      case "s":
        document.getElementsByClassName("s")[0].classList.remove("active");
        break;
      case "d":
        document.getElementsByClassName("d")[0].classList.remove("active");
        break;
      case "x":
        document.getElementsByClassName("x")[0].classList.remove("active");
        break;
      case "c":
        document.getElementsByClassName("c")[0].classList.remove("active");
        break;
      case "z":
        document.getElementsByClassName("z")[0].classList.remove("active");
        break;
      default:
        return;
    }
  };
  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
    document.addEventListener("keyup", this.onKeyUp.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
    document.removeEventListener("keyup", this.onKeyUp.bind(this));
  }
  render() {
    return (
      <Wrapper
        onKeyDown={this.onKeyPressed}
        onKeyUp={this.onKeyUp}
        tabIndex="0"
      >
        <Keys handleClick={this.handleClick} />
        <br />
        <Display drumkey={this.state.key} name={this.state.name} />
      </Wrapper>
    );
  }
}

export default Drumpad;
