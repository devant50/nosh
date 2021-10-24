import logo from './Nosh\ Icons/Nosh\ Icon.svg';
import filler from './Nosh\ Icons/filler.png';


//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbr from './components/nav.js';
import Body from './components/body.js';

function App() {
  return (
    <div className="App">
      <Navbr image={logo}/>
      <Body filler={filler}/>
    </div>
  );
}

export default App;


