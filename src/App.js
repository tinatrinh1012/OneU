import logo from './logo.svg';
import './App.css';
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './LogoClass.css';

function App() {

  function school() {
    var schoolID = document.getElementById("schoolList");
  }
  function major() {
    var majorID = document.getElementById("majorList");
    
  } 
  return (
    <div className="App">
      <img className="LogoClass" src= "Logo.PNG"/>
      <h1>School</h1>
      <select id="schoolList" onchange="school()">
        <option>University of St. Thomas</option>
      </select>
      <h1>Major</h1>
      <select id="majorList" onchange="major()">
        <option>Entrepreneurship</option>
      </select>

      <br/>

      <BrowserRouter>
      
        <Link to='/degreeplan'>
          <button className='btn btn-primary'>Create a degree plan</button>
        </Link>

        <Route path='/degreeplan' component={DegreePlan} exact/>

        
      
      </BrowserRouter>

      

      
    </div>
  );
}

export default App;
