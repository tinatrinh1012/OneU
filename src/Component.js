import React from 'react';
import './Component.css';
import Logo from './Logo.JPG';

function Component() {
    return <div>
        <div class= "navigation">
            <img className="smallLogo" src={Logo}/><p></p>
            <div class="line"></div>
            <select id="schoolList" onchange="school()">
                <option>University of St. Thomas</option>
            </select>
            <p></p>
            <select id="majorList" onchange="major()">
            <   option>Entrepreneurship</option>
            </select> 
        </div>
    </div>
}
export default Component 