import React, { Component } from "react";
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
