import React from 'react'
import {Link} from 'react-router-dom'


function CareerOptions() {
    return <div>
        <select id="schoolList" onchange="school()">
            <option>University of St. Thomas</option>
        </select>
        <p></p>
        <select id="majorList" onchange="major()">
            <option>Entrepreneurship</option>
        </select> 

        <br/>
        <Link to="/careeroptions/mentors">
            <button className='btn btn-primary'>Connect with mentors</button>
        </Link>    
    </div>
}

export default CareerOptions