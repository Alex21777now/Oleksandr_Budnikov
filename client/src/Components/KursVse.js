import React, { Component } from "react";
import PropTypes from 'prop-types'
import {
  Card

} from "react-bootstrap";

//const data1 = [1, 2, 3, 4, 5];
/*const data1 = [{r030: 36, txt: 'Австралійський долар', rate: 19.3653, cc: 'AUD', exchangedate: '29.11.21'},
               {r030: 124, txt: 'Канадський долар', rate: 21.235, cc: 'CAD', exchangedate: '29.11.21'},
               {r030: 156, txt: 'Юань Женьміньбі', rate: 4.2413, cc: 'CNY', exchangedate: '29.11.21'},
               {r030: 191, txt: 'Куна', rate: 4.0646, cc: 'HRK', exchangedate: '29.11.21'},
               {r030: 203, txt: 'Чеська крона', rate: 1.1921, cc: 'CZK', exchangedate: '29.11.21'}];*/


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


const KursVse = props => (

  <div>

  <p>{ props.error }</p>
  { props.cc1 &&
    <div> КУРСЫ <strong>ВСЕХ ВАЛЮТ</strong>, УСТАНОВЛЕННЫЕ НА <strong>ДАННЫЙ МОМЕНТ</strong>:
        <p>{<div><p>&nbsp;&nbsp;&nbsp;</p></div>}</p>
        <p>{
          /*   data1.map(dat1 => (<h1>{dat1}</h1>)) */

             props.data1.map(dat1 => (
                <div>

                <p>Код валюты: {dat1.r030}</p>
                <p>Название валюты: {dat1.txt}</p>
                <p>Курс: <strong>{dat1.rate}</strong></p>
                <p>Сокращенное имя валюты: <strong>{dat1.cc}</strong></p>
                <p>Дата: {dat1.exchangedate}</p>
                <p>______________________________________________</p>
                </div>
              ))
        }</p>

    </div>
  }
  </div>
);



export default KursVse;
