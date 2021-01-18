import React from 'react'
import {Link} from 'react-router-dom'


function CareerOptions() {
    return <div>
        <h5>Career Options and Connect with Mentors</h5>
        <select id="schoolList" onchange="school()">
            <option>University of St. Thomas</option>
        </select>
        <br/>
        <select id="majorList" onchange="major()">
            <option>Entrepreneurship</option>
        </select> 

        <br/>
            <button className='btn btn-primary'>Connect with mentors</button>
   
    </div>
}

export default CareerOptions