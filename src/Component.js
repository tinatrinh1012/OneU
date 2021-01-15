import React from 'react';
import './Component.css';

function Component() {
    return <div>
        <div class= "navigation">
            <h1>School</h1>
            <select id="schoolList" onchange="school()">
                <option>University of St. Thomas</option>
            </select>
            <h2>Major</h2>
            <select id="majorList" onchange="major()">
            <   option>Entrepreneurship</option>
            </select> 
        </div>
    </div>
}
export default Component 