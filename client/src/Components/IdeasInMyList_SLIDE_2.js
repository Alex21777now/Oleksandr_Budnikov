import React, { Component } from "react";
import KursVse from "./KursVse";
import ChooseFreshIdeas_1 from "./ChooseFreshIdeas_1";
import { useState } from "react";
import {
  Card

} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
//import 'swiper/css/navigation'; 
//import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';



export function testFunction() {
    console.log("Yay it works!");
  }


/*  export function addSlide(slideData, swiperInst, setSlideData) {

  setSlideData([
    { id: new Date().getTime() + "", title: new Date() + "" },
    ...slideData
  ]);
  swiperInst.update();
};  */


export default function IdeasInMyList_SLIDE_2() {



     const [swiperInst, setSwiperInst] = useState(null);
     const [slideData, setSlideData] = useState([
       { id: "1", title: "Initial Slide" }
     ]);


   //const addSlide = () => {
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
             'Primary',
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

 }
