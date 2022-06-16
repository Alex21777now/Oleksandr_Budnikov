import React, { Component } from "react";
import {
  Card

} from "react-bootstrap";
import Form from "./form";
import KursVse from "./KursVse";



export default class ChooseFreshIdeas_1 extends Component {

  state = {
    cc1: undefined,
    exchangedate1: undefined,
    r0301: undefined,
    rate1: undefined,
    txt1: undefined,
    data1: undefined,
    error: undefined

  }

  gettingKurs1 = async (e1) => {
    e1.preventDefault();
    const api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
    const data1 = await api_url1.json();
    console.log(data1);

    this.setState({
      cc1: data1[4].cc,
      exchangedate1: data1[4].exchangedate,
      r0301: data1[4].r030,
      rate1: data1[4].rate,
      txt1: data1[4].txt,
      data1: data1,
      error: ""
    });
    /*const items1 = data1.map((dat1) => <li>{dat1}</li>);*/
    /*console.log(items1);*/

  }

  render() {
    return (
      <>
      <h4>Choose fresh ideas to do</h4>
{/*      <p>&nbsp;</p>  */}
      <div>

{/*  НАША БыВШАЯ ФОРМА
      <Form kursMethod1={this.gettingKurs1}

            data1={this.state.data1}
       />
*/}

      <>
{/*  НАША БыВШАЯ С Т А Т И К А
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

*/}

{
  <KursVse
   cc1={this.state.cc1}
   exchangedate1={this.state.exchangedate1}
   r0301={this.state.r0301}
   rate1={this.state.rate1}
   txt1={this.state.txt1}
   error={this.state.error}
      data1={this.state.data1}
      /*items1={items1}*/
   />
 }
     </>
    <img src="logo192.png" alt="" onLoad={this.gettingKurs1}></img>
       <p>&nbsp;</p>
     <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      </div>

     </>
    );
  }
}
