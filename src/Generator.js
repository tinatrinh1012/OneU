import React from 'react';
import './Generator.css';
import Logo from './Logo.JPG';
import {Link} from 'react-router-dom'
import CareerOptions from './CareerOptions';
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom'
import ExploreDegrees from './ExploreDegrees'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Mentors from './Mentors'


function Generator() {
    return <div className = "navigation">
      
                <img className="smallLogo" src={Logo}/>

                <Link to="/">
                    <button type= "button" className="btn btn-outline-secondary btn-sm">Explore Degrees</button>
                </Link>
                
                <Link to="/careeroptions">
                    <button className="btn btn-outline-secondary btn-sm">Career Options</button>
                </Link>

                <div className="line"></div>

                <Route path='/' component={ExploreDegrees} exact/>
                <Route path='/careeroptions' component={CareerOptions} exact/>
         
    </div>
}
export default Generator 