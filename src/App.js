import logo from './logo.svg';
import './App.css';
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './LogoClass.css';
import Logo from './Logo.JPG';
import Component from './Component';


function App() {


  function school() {
    var schoolID = document.getElementById("schoolList");
  }
  function major() {
    var majorID = document.getElementById("majorList");
    
  } 
  return (
    
    <div className="App">
      <img className="LogoClass" src={Logo}/>
      <br/>

      <BrowserRouter>

        <Component/>

        <Route path='/degreeplan' component={DegreePlan} exact/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
