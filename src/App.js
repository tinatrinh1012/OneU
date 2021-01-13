import logo from './logo.svg';
import './App.css';
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1>This is OneU app</h1>

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
