import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ExploreDegrees from './ExploreDegrees';
import CareerOptions from './CareerOptions';
import Navigation from './Navigation';


function App() {

  return (
    
    <div className="App">
      <Navigation/>
      <div className="navbreak"></div>
      <BrowserRouter>
          <Route path='/' component={ExploreDegrees} exact/>
          <Route path='/CareerOptions' component={CareerOptions} exact/>
      </BrowserRouter>
      <br/>
    </div>
  );
}

export default App;
