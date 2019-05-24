import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: white;
`;

const KeyContainerRow1 = styled.div`
  display: inline-block;
  text-align: center;
  margin: 20px 15px 20px 15px;
`;
const KeyContainerRow2 = styled.div`
  display: inline-block;
  text-align: center;
  margin: 20px 15px 20px 15px;
`;
const Button = styled.button`
  display: inline-block;
	color: #aaa;
  font-weight:600;
	text-decoration: none;
	text-align: center;
	width: 44px;
	height: 41px;
	margin: 5px;
	background: #eff0f2;
	-moz-border-radius: 4px;
	border-radius: 4px;
	border-top: 1px solid #f5f5f5;
	-webkit-box-shadow: 
		inset 0 0 25px #e8e8e8,
		0 1px 0 #c3c3c3,
		0 2px 0 #c9c9c9,
		0 2px 3px #333;
	-moz-box-shadow: 
		inset 0 0 25px #e8e8e8,
		0 1px 0 #c3c3c3,
		0 2px 0 #c9c9c9,
		0 2px 3px #333;
	box-shadow: 
		inset 0 0 25px #e8e8e8,
		0 1px 0 #c3c3c3,
		0 2px 0 #c9c9c9,
		0 2px 3px #333;
	text-shadow: 0px 1px 0px #f5f5f5;}

&:active, .keydown {
	color: #888;
	background: #ebeced;
	margin: 7px 5px 3px;
	-webkit-box-shadow:
		inset 0 0 25px #ddd,
		0 0 3px #333;
	-moz-box-shadow: 
		inset 0 0 25px #ddd,
		0 0 3px #333;
	box-shadow: 
		inset 0 0 25px #ddd,
		0 0 3px #333;
	border-top: 1px solid #eee;}
`;

const DrumpadWrapper = styled.div`
  margin: 15px auto 0;
  width: 300px;
  height: 270px;
  background: #d5d9dc url("keyboard-background.jpg") repeat-x;
  -moz-border-radius-topleft: 7px 21px;
  -moz-border-radius-topright: 7px 21px;
  -moz-border-radius-bottomright: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-top-left-radius: 7px 21px;
  border-top-right-radius: 7px 21px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  -webkit-box-shadow: inset 0 0 8px #bbb, 0 1px 0 #aaa, 0 4px 0 #bbb,
    0 10px 30px #ddd;
  -moz-box-shadow: inset 0 0 8px #bbb, 0 1px 0 #aaa, 0 4px 0 #bbb,
    0 10px 30px #ddd;
  box-shadow: inset 0 0 8px #bbb, 0 1px 0 #aaa, 0 4px 0 #bbb, 0 10px 30px #ddd;
`;
const Wrapper = styled.div`
  background-color: white;
  height: 880px;
`;

export {
  KeyContainerRow1,
  KeyContainerRow2,
  Button,
  DrumpadWrapper,
  HeaderWrapper,
  Wrapper
};
