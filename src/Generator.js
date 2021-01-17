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
                <img className="smallLogo" src={Logo}/>

                <Link to="/">
                    <button type= "button" className="btn btn-outline-secondary btn-sm">Explore Degrees</button>
                </Link>
                
                <Link to="/careeroptions">
                    <button className="btn btn-outline-secondary btn-sm">Career Options</button>
                </Link>

                <div className="line"></div>
                <Link to="/careeroptions/mentors">
                    <button className='btn btn-primary'>Create a degree plan</button>
                </Link>
                <Route path='/' component={ExploreDegrees} exact/>
                <Route path='/careeroptions' component={CareerOptions} exact/>
            </BrowserRouter>
        </div>
        <BrowserRouter>
            <Route path='/careeroptions/mentors' component={Mentors} exact/>
        </BrowserRouter>
        
    </div>
}
export default Generator 