import React from "react";
import {
  KeyContainerRow1,
  KeyContainerRow2,
  KeyContainerRow3,
  Button,
  DrumpadWrapper
} from "../styles/styles";

const Keys = props => {
  return (
    <DrumpadWrapper>
      <KeyContainerRow1>
        <audio id="q">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button
          className="q"
          onClick={() => props.handleClick("q", "punchy-kick-1")}
        >
          q
        </Button>
      </KeyContainerRow1>
      <KeyContainerRow1>
        <audio id="w">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button
          className="w"
          onClick={() => props.handleClick("w", "Heater-2")}
        >
          w
        </Button>
      </KeyContainerRow1>
      <KeyContainerRow1>
        <audio id="e">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button className="e" onClick={() => props.handleClick("e", "Dsc-Oh")}>
          e
        </Button>
      </KeyContainerRow1>

      <KeyContainerRow2>
        <audio id="a">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button
          className="a"
          onClick={() => props.handleClick("a", "Give-us-a-light")}
        >
          a
        </Button>
      </KeyContainerRow2>
      <KeyContainerRow2>
        <audio id="s">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button className="s" onClick={() => props.handleClick("s", "Chord-1")}>
          s
        </Button>
      </KeyContainerRow2>
      <KeyContainerRow2>
        <audio id="d">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button className="d" onClick={() => props.handleClick("d", "Chord-2")}>
          d
        </Button>
      </KeyContainerRow2>
      <KeyContainerRow3>
        <audio id="z">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button className="z" onClick={() => props.handleClick("z", "Cev-H2")}>
          z
        </Button>
      </KeyContainerRow3>
      <KeyContainerRow3>
        <audio id="x">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button
          className="x"
          onClick={() => props.handleClick("x", "punchy-kick-1")}
        >
          x
        </Button>
      </KeyContainerRow3>
      <KeyContainerRow3>
        <audio id="c">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3
            "
            type="audio/mpeg"
          />
        </audio>
        <Button className="c" onClick={() => props.handleClick("c", "Bld-H1")}>
          c
        </Button>
      </KeyContainerRow3>
    </DrumpadWrapper>
  );
};

export default Keys;
