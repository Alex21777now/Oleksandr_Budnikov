import React, { Component } from "react";
import {
  Card

} from "react-bootstrap";
import { useState } from "react";
import Form from "./form";
import KursVse from "./KursVse";



export default class ChooseFreshIdeas_1 extends Component {

/*  state = {
    cc1: undefined,
    exchangedate1: undefined,
    r0301: undefined,
    rate1: undefined,
    txt1: undefined,
    data1: undefined,
    error: undefined

  }  */

  state = {
      activity1: undefined,
      type1: undefined,
      participants1: undefined,
      price1: undefined,
      link1: undefined,
      key1: undefined,
      accessibility1: undefined,
      data1: undefined,
      error: undefined
    }

/*gettingKurs1 = async (e1) => {
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

  }*/

/* componentDidMount() {

      console.log('KAKOGO FIGA NE RABOTAET METOD TUT')
} */

async componentDidMount() {
// when react first renders then it called componentDidMount()

/*   const api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
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
console.log(this.state);   */


/* const api_url1 = await fetch(`http://www.boredapi.com/api/activity?json`);
const data1 = await api_url1.json();
console.log(data1);

this.setState({
  activity1: data1.activity,
  type1: data1.type,
  participants1: data1.participants,
  price1: data1.price,
  link1: data1.link,
  key1: data1.key,
  accessibility1: data1.accessibility,
  data1: data1,
  error: ""
});
console.log(this.state); */


 let data1 = [];
for (let i = 0; i < 6; i++)
{
  const api_url1 = await fetch(`http://www.boredapi.com/api/activity?json`);
  const item = await api_url1.json();
  //console.log(item);
  data1.push({item});
}
console.log(data1);


this.setState({
 activity1: data1[4].item.activity,
 type1: data1[4].item.type,
 participants1: data1[4].item.participants,
 price1: data1[4].item.price,
 link1: data1[4].item.link,
 key1: data1[4].item.key,
 accessibility1: data1[4].item.accessibility,
 data1: data1,
 error: ""
});
console.log(this.state);



}

  render() {
    const { addSlide, removeSlide, slideData, setSwiperInst } = this.props;
    return (
      <>
      <h4>Choose fresh ideas to do</h4>
{/*      <p>&nbsp;</p>  */}
      <div>


      <Form kursMethod1={this.gettingKurs1}

            data1={this.state.data1}
       />

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
  /* cc1={this.state.cc1}
   exchangedate1={this.state.exchangedate1}
   r0301={this.state.r0301}
   rate1={this.state.rate1}
   txt1={this.state.txt1}
   error={this.state.error}
      data1={this.state.data1}   */

         addSlide={addSlide}
         removeSlide={removeSlide}
         slideData={slideData}
         setSwiperInst={setSwiperInst}

         activity1={this.state.activity1}
         type1={this.state.type1}
         participants1={this.state.participants1}
         price1={this.state.price1}
         link1={this.state.link1}
         key1={this.state.key1}
         accessibility1={this.state.accessibility1}
         error={this.state.error}
            data1={this.state.data1}

   />
 }
     </>
     {/*БЫВШЕЕ ВЫПОЛНЕНИЕ МЕТОДА ЗАГРУЗКОЙ КАРТИНКИ <img src="logo192.png" alt="" onLoad={this.gettingKurs1}></img>*/}
       <p>&nbsp;</p>
     <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      </div>

     </>
    );
  }
}
