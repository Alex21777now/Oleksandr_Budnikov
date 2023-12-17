import React, { Component } from "react";
import { useCallback } from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'
import {
  Card

} from "react-bootstrap";
import IdeasInMyList_SLIDE_2 from './IdeasInMyList_SLIDE_2';
import {testFunction} from './IdeasInMyList_SLIDE_2'
//import {addSlide} from './IdeasInMyList_SLIDE_2'
//import {addSlide} from './IdeasInMyList_SLIDE_2';
//const data1 = [1, 2, 3, 4, 5];
/*const data1 = [{r030: 36, txt: 'Австралійський долар', rate: 19.3653, cc: 'AUD', exchangedate: '29.11.21'},
               {r030: 124, txt: 'Канадський долар', rate: 21.235, cc: 'CAD', exchangedate: '29.11.21'},
               {r030: 156, txt: 'Юань Женьміньбі', rate: 4.2413, cc: 'CNY', exchangedate: '29.11.21'},
               {r030: 191, txt: 'Куна', rate: 4.0646, cc: 'HRK', exchangedate: '29.11.21'},
               {r030: 203, txt: 'Чеська крона', rate: 1.1921, cc: 'CZK', exchangedate: '29.11.21'}];*/


/*  const addSlide = require("./IdeasInMyList_SLIDE_2").addSlide;
const dataFromParent = require("./IdeasInMyList_SLIDE_2").dataFromParent;
function AddSlide() { return (
  console.log('НАЖАТО'),
  () => dataFromParent()
  //() => addSlide()
); }        */


            /*   async function Data11() {
                 //let data1 =  new Array();
                 //let api_url1=0;
                 var api_url1 = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
                 var data1 = await api_url1.json();
                 return(
                   data1
                 )
               }
               Data11();
               const data1 = Array(Data11());
               console.log(data1);                    */
               function RandArray(array){
                   var rand = Math.random()*array.length | 0;
                   var rValue = array[rand];
                   return rValue;
               }
               var myArray = ['secondary', 'success', 'warning', 'info', 'light', 'primary'];


 export default function KursVse(props) {


//const handleClick = useCallback(()=>AddSlide(), []);

return (
  <div>
  <button onClick={() => props.addSlide()}>add slide</button>
  <p>{ props.error }</p>
  { props.key1 &&
    <div>
        <p>{<div><p>&nbsp;&nbsp;&nbsp;</p></div>}</p>
        <p>{


             props.data1.map(dat1 => (

              /*   <Card
                    bg={RandArray(myArray)}
                    key={dat1.r030}
                    text={'black'}
                    //text={Card.background === 'light' ? 'black' : 'black'}
                    style={{ width: '18rem', display: 'inline-block', margin: '15px'}}
                    className="mb-3"
                  >
                  <Card.Header>Header</Card.Header>
                    <Card.Body>

                   <Card.Title>{dat1.txt} Название валюты: Card Title </Card.Title>
                       <Card.Text>
                   <p>Курс: <strong>{dat1.rate}</strong></p>
                   <p>Сокращенное имя валюты: <strong>{dat1.cc}</strong></p>
                   <p>Дата: {dat1.exchangedate}</p>
                   <p>    </p>
                       </Card.Text>
                     </Card.Body>
                   </Card>   */

                <Card
                   bg={RandArray(myArray)}
                   key={dat1.item.key}
                   text={'black'}
                   //text={Card.background === 'light' ? 'black' : 'black'}
                   style={{ width: '18rem', display: 'inline-block', margin: '15px'}}
                   className="mb-3"
                //   onClick={() => console.log('ZHOPA 1')}
                //    onClick={() => console.log('НАЖАТА НАЖАТА')}

                    onClick={() => props.addSlide()}


                 >
                 <Card.Header>Header</Card.Header>
                   <Card.Body>

                  <Card.Title>LINK: {dat1.item.link} Card Title </Card.Title>
                      <Card.Text>
                  <p>PRICE: <strong>{dat1.item.price}</strong></p>
                  <p>ACTIVITY: <strong>{dat1.item.activity}</strong></p>
                  <p>TYPE: {dat1.item.type}</p>
                  <p>PARTICIPANTS: <strong>{dat1.item.participants}</strong></p>
                  <p>ACCESSIBILITY: {dat1.item.accessibility}</p>
                  <p>    </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>

              ))
        }</p>

    </div>
  }
  </div>
);
}
