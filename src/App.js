import logo from './logo.svg';
import './App.css';
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <img class="LogoClass" src= "Logo.PNG"> </img>
      <h1>School</h1>
      <select id="schoolList" onchange="school()">
        <option>University of St. Thomas</option>
      </select>
      <h1>Major</h1>
      <select id="majorList" onchange="major()">
        <option>Entrepreneurship</option>
      </select>
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
