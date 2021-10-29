import logo from './Nosh\ Icons/Nosh\ Icon.svg';
import filler from './Nosh\ Icons/filler.png';
import dinner_1 from './IMG/Dinner_1.png';
import dinner_2 from './IMG/Dinner_2.png';
import lunch_2 from './IMG/Lunch_2.png';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbr from './components/nav.js';
import MealPlanCarousel from './components/MealPlanCarousel.js';

function App() {
  return (
    <div className="App">
      <Navbr image={logo}/>
      <MealPlanCarousel filler={filler} images={[dinner_1, dinner_2, lunch_2]}/>
    </div>
  );
}

export default App;


