import React from 'react';
import './Component.css';
import Logo from './Logo.JPG';
import {Link} from 'react-router-dom'


function Component() {
    return <div>
        <div className= "navigation">
            <img className="smallLogo" src={Logo}/><p></p>
            <div className="line"></div>
            <select id="schoolList" onchange="school()">
                <option>University of St. Thomas</option>
            </select>
            <p></p>
            <select id="majorList" onchange="major()">
                <option>Entrepreneurship</option>
            </select> 

            <br/>
            
            <Link to='/degreeplan'>
                <button className='btn btn-primary'>Create a degree plan</button>
            </Link>
        </div>

        <div className="try">
            try center box
        </div>
    </div>
}
export default Component 