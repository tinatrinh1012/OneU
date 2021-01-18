import logo from './logo.svg';
import './App.css';
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './LogoClass.css';
import Logo from './Logo.JPG';
import Generator from './Generator';
import ExploreDegrees from './ExploreDegrees';
import CareerOptions from './CareerOptions';
import Mentors from './Mentors';
import Navigation from './Navigation';


function App() {


  function school() {
    var schoolID = document.getElementById("schoolList");
  }
  function major() {
    var majorID = document.getElementById("majorList");
    
  } 
  return (
    
    <div className="App">
      <Navigation/>
      <br/>
      <BrowserRouter>
          <Generator/>
      </BrowserRouter>
    </div>
  );
}

export default App;
