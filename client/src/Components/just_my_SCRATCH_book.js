export default class IdeasInMyList_SLIDE_2 extends Component {

 render() {
   return (
     <>
     <h4>Ideas in my list</h4>
     <div>
     ( click on it to fulfill )
     <p>&nbsp;</p>

     <Swiper
           // install Swiper modules
           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
           spaceBetween={50}
           slidesPerView={3}
           autoplay={{ delay: 5000 }}
           navigation
           pagination={{ clickable: true }}
     //      scrollbar={{ draggable: true }}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
           onClick={() => console.log('ZHOPA 3')}
         >

         {  /*<SwiperSlide>Slide 1</SwiperSlide>
           <SwiperSlide>Slide 2</SwiperSlide>
           <SwiperSlide>Slide 3</SwiperSlide>
           <SwiperSlide>Slide 4</SwiperSlide>
           <SwiperSlide>Slide 5</SwiperSlide>*/  }

           {[

             'Secondary',
             'Success',

             'Warning',
             'Info',
             'Light',
             'Dark',
           ].map((variant) => (
             <SwiperSlide>
             <Card
               bg={variant.toLowerCase()}
               key={variant}
               text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
               style={{ width: '18rem', display: 'inline-block', margin: '15px'}}
               className="mb-3"
               onClick={() => console.log('ZHOPA 2')}
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
             </SwiperSlide>
           ))}

         <div>&nbsp;</div>
         <div>Тут ЕЩЕ Что-то 1</div>
         <div>Тут ЕЩЕ Что-то 2</div>
         <div>&nbsp;</div>

         </Swiper>
           <p>&nbsp;</p>
     <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
     </div>
     </>
   );
 }
}



=============================================================================================================
=============================================================================================================



import React, { Component } from "react";
import { useCallback } from 'react';
import PropTypes from 'prop-types'
import {
  Card

} from "react-bootstrap";
import IdeasInMyList_SLIDE_2 from './IdeasInMyList_SLIDE_2';
//import {addSlide} from './IdeasInMyList_SLIDE_2';
//const data1 = [1, 2, 3, 4, 5];
/*const data1 = [{r030: 36, txt: 'Австралійський долар', rate: 19.3653, cc: 'AUD', exchangedate: '29.11.21'},
               {r030: 124, txt: 'Канадський долар', rate: 21.235, cc: 'CAD', exchangedate: '29.11.21'},
               {r030: 156, txt: 'Юань Женьміньбі', rate: 4.2413, cc: 'CNY', exchangedate: '29.11.21'},
               {r030: 191, txt: 'Куна', rate: 4.0646, cc: 'HRK', exchangedate: '29.11.21'},
               {r030: 203, txt: 'Чеська крона', rate: 1.1921, cc: 'CZK', exchangedate: '29.11.21'}];*/

const addSlide = require("./IdeasInMyList_SLIDE_2").addSlide;
const dataFromParent = require("./IdeasInMyList_SLIDE_2").dataFromParent;
function AddSlide() { return (
  console.log('НАЖАТО'),
  () => dataFromParent()
  //() => addSlide()
); }
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
               var myArray = ['secondary', 'success', 'warning', 'info', 'light', 'dark'];

const KursVse = props => (

  <div>

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
                    onClick={() => AddSlide()}
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



export default KursVse;


===============================================================================
===============================================================================
===============================================================================

export default function IdeasInMyList_SLIDE_2() {



  const [swiperInst, setSwiperInst] = useState(null);
    const [slideData, setSlideData] = useState([
      { id: "1", title: "Initial Slide" }
    ]);

   // const addSlide = () => {
    function addSlide() {
    setSlideData([
      { id: new Date().getTime() + "", title: new Date() + "" },
      ...slideData
    ]);
    swiperInst.update();
  };



  const removeSlide = (targetId) => {
   let newData = slideData.filter((s) => {
     return s.id !== targetId;
   });
   setSlideData(newData);
   swiperInst.update();
 };

 function testFunction() {
     console.log("Yay it works!");
   }


   return (
     <>
     <h4>Ideas in my list</h4>
     <div>
     ( click on it to fulfill )
     <p>&nbsp;</p>
     <KursVse
        /* addSlide={addSlide}
        dataFromParent = {() => addSlide()} */
       // addSlide={addSlide}
        fn={testFunction}

      />
     <Swiper
           // install Swiper modules
           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
           spaceBetween={50}
           slidesPerView={3}
           autoplay={{ delay: 5000 }}
           navigation
           pagination={{ clickable: true }}
     //      scrollbar={{ draggable: true }}
           onSwiper={(swiper) => {
         console.log(swiper);
         setSwiperInst(swiper);
       }}
           onSlideChange={() => console.log('slide change')}

         >

         {  /*<SwiperSlide>Slide 1</SwiperSlide>
           <SwiperSlide>Slide 2</SwiperSlide>
           <SwiperSlide>Slide 3</SwiperSlide>
           <SwiperSlide>Slide 4</SwiperSlide>
           <SwiperSlide>Slide 5</SwiperSlide>*/  }

           {[

             'Secondary',
             'Success',

             'Warning',
             'Info',
             'Light',
             'Dark',
           ].map((variant) => (
             <SwiperSlide>
             <Card
               bg={variant.toLowerCase()}
               key={variant}
               text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
               style={{ width: '18rem', display: 'inline-block', margin: '15px'}}
               className="mb-3"
               onClick={() => console.log('ZHOPA 2')}
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

             </SwiperSlide>
           ))}

         <div>&nbsp;</div>
         <div>Тут ЕЩЕ Что-то 1</div>
         <div>Тут ЕЩЕ Что-то 2</div>
         <div>&nbsp;</div>

         {slideData?.map((s, index) => {
                   return (
                     <SwiperSlide key={s.id}>
                       <div className="a-slide">
                         <div>{s.title}</div>
                         <button style={{ margin: 8 }} onClick={() => removeSlide(s.id)}>
                           REMOVE SLIDE
                         </button>
                       </div>
                     </SwiperSlide>
                   );
                 })}

         </Swiper>
           <p>&nbsp;</p>
           <div style={{ margin: 16 }}>
              <button onClick={() => addSlide()}>ADD SLIDE</button>
           </div>
     <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
     </div>
     </>
   );
   //module.exports = { addSlide }
 }
