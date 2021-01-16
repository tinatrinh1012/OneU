import React from 'react';
import './Generator.css';
import Logo from './Logo.JPG';
import {Link} from 'react-router-dom'
import CareerOptions from './CareerOptions';
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom'
import ExploreDegrees from './ExploreDegrees'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function Generator() {
    return <div>
        <div className= "navigation">
        
            <BrowserRouter>
                <img className="smallLogo" src={Logo}/><p></p>

                <Link to="/">
                    <button className="btn btn-primary">Explore Degrees</button>
                </Link>
                
                <Link to="/careeroptions">
                    <button className="btn btn-danger">Career Options</button>
                </Link>

                <div className="line"></div>

                <Route path='/' component={ExploreDegrees} exact/>
                <Route path='/careeroptions' component={CareerOptions} exact/>
            </BrowserRouter>
        </div>
        
    </div>
}
export default Generator 