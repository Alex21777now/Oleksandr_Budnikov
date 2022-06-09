import React, { Component } from "react";
import {
  Card

} from "react-bootstrap";


export default class ChooseFreshIdeas_1 extends Component {
  render() {
    return (
      <>
      <h4>Choose fresh ideas to do</h4>
      <p>&nbsp;</p>
      <div>
      <>
{[

  'Secondary',
  'Success',

  'Warning',
  'Info',
  'Light',
  'Dark',
].map((variant) => (
  <Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem', display: 'inline-block', margin: '15px'}}
    className="mb-3"
  >
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{variant} Card Title </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
))}
     </>
       <p>&nbsp;</p>
     <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      </div>

     </>
    );
  }
}
