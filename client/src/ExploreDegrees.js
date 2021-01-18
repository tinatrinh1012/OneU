import React from 'react'
import {Link} from 'react-router-dom'
import DegreePlan from './DegreePlan';
import {BrowserRouter, Route} from 'react-router-dom';
import './Generator.css'

function ExploreDegrees() {
    return <div>
            <h5>Explore Degrees</h5>
            <br/>
            <select id="schoolList" onchange="school()">
                <option>University of St. Thomas</option>
            </select>
            <p></p>
            <select id="majorList" onchange="major()">
                <option>Entrepreneurship</option>
            </select> 

            <br/>
            
            <button className='btn btn-primary'>Create a degree plan</button>
           
  
    </div>
}

export default ExploreDegrees