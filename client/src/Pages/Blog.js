import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
      return (
        <div>
          <div>
              Blog
          </div>
          <div>
              <img src={require("../images/dev4.jpg")}
                   height="541"
                   width="866"
                   alt="devochka4"
               />
          </div>
        </div>
      )
   }
}
