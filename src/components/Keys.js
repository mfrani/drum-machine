import React from "react";
import {
  KeyContainerRow1,
  KeyContainerRow2,
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
        <Button onClick={() => props.handleClick("q", "punchy-kick-1")}>
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
        <Button onClick={() => props.handleClick("w", "Heater-2")}>w</Button>
      </KeyContainerRow1>
      <KeyContainerRow1>
        <audio id="e">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button onClick={() => props.handleClick("e", "Dsc-Oh")}>e</Button>
      </KeyContainerRow1>

      <KeyContainerRow2>
        <audio id="a">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button onClick={() => props.handleClick("a", "Give-us-a-light")}>
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
        <Button onClick={() => props.handleClick("s", "Chord-1")}>s</Button>
      </KeyContainerRow2>
      <KeyContainerRow2>
        <audio id="d">
          <source
            src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
            type="audio/mpeg"
          />
        </audio>
        <Button onClick={() => props.handleClick("d", "Chord-2")}>d</Button>
      </KeyContainerRow2>
    </DrumpadWrapper>
  );
};

export default Keys;

// https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3
