import logo from './logo.svg';
import './App.css';
import { useState } from "react";


import Header from './Components/Header';
import Footer from './Components/Footer';
import ChooseFreshIdeas_1 from './Components/ChooseFreshIdeas_1';
import IdeasInMyList_SLIDE_2 from './Components/IdeasInMyList_SLIDE_2';
import Achievements_3 from './Components/Achievements_3';
import CompletedChallenges_4 from './Components/CompletedChallenges_4';
import KursVse from './Components/KursVse';

function App() {
  
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
    <div className="App">
      <Header />

      <ChooseFreshIdeas_1 
         addSlide={addSlide}
         removeSlide={removeSlide}
         slideData={slideData}
         setSwiperInst={setSwiperInst}
      />
      <IdeasInMyList_SLIDE_2 
         addSlide={addSlide}
         removeSlide={removeSlide}
         slideData={slideData}
         setSwiperInst={setSwiperInst}
      />
      <Achievements_3 />
      <CompletedChallenges_4
         addSlide={addSlide}
         removeSlide={removeSlide}
         slideData={slideData}
         setSwiperInst={setSwiperInst}
       />
      <Footer />
    </div>
  );
}

export default App;
