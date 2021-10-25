import logo from './Nosh\ Icons/Nosh\ Icon.svg';
import filler from './Nosh\ Icons/filler.png';


//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbr from './components/nav.js';
import MealPlanCarousel from './components/MealPlanCarousel.js';

function App() {
  return (
    <div className="App">
      <Navbr image={logo}/>
      <MealPlanCarousel filler={filler}/>
    </div>
  );
}

export default App;


