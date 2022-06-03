import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import ChooseFreshIdeas_1 from './Components/ChooseFreshIdeas_1';
import IdeasInMyList_SLIDE_2 from './Components/IdeasInMyList_SLIDE_2';
import Achievements_3 from './Components/Achievements_3';
import CompletedChallenges_4 from './Components/CompletedChallenges_4';

function App() {
  return (
    <div className="App">
      <Header />
      
      <ChooseFreshIdeas_1 />
      <IdeasInMyList_SLIDE_2 />
      <Achievements_3 />
      <CompletedChallenges_4 />

      <Footer />
    </div>
  );
}

export default App;
