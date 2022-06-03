import React, { Component } from 'react'

export default class About extends Component {
  render() {
      return (
        <div>
          <div>
              About
          </div>
          <div>
              <img src={require("../images/dev2.jpg")}
                   height="541"
                   width="721"
                   alt="devochka2"
               />
          </div>
        </div>
      )
   }
}
