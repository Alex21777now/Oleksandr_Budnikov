import React, { Component } from "react";
import styled from 'styled-components';


const Styles = styled.div`
  padding: 1rem;

  .gray {
  background-color: gray;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}
.sphere {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  font-size: 300%;
  color: white;
  position: relative;
  box-shadow: inset -10px -10px 100px #0007, 10px 10px 20px black, inset 0px 0px 10px black;
  display: inline-block;
  margin: 5%;
}
.sphere::after {
  background-color: rgba(255, 255, 255, 0.3);
  content: '';
  height: 45%;
  width: 12%;
  position: absolute;
  top: 4%;
  left: 15%;
  border-radius: 50%;
  transform: rotate(40deg);
}
`

export default class Achievements_3 extends Component {
  render() {
    return (
      <>
      <h4>Achievements</h4>
      <div>

        <Styles>
            <div className="sphere">1</div>
            <div style={{ display: 'inline-block' }}>Recreational</div>
            <div className="sphere green">3</div>
            <div style={{ display: 'inline-block' }}>Social</div>
            <div className="sphere yellow">5</div>
            <div style={{ display: 'inline-block' }}>Education</div>
            <div className="sphere blue">3</div>
            <div style={{ display: 'inline-block' }}>Sport</div>
            <div className="sphere gray">11</div>
            <div style={{ display: 'inline-block' }}>Relaxation</div>
        </Styles>
        <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      </div>
     </>
    );
  }
}
