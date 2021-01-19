import React from 'react';
import {Link} from 'react-router-dom';
import './Mentors.css'

function Mentors() {
    return <div>
        <div className= "Container">
            <h5>Mentors List</h5>
            <div className="Box">
                <div className = "Kyle">
                    <img className= "Profile" src="img_avatar.png" alt="Avatar"/>
                    <div className="KyleContent">
                        <h11>Kyle Andrews- Sales Engineer @ Jamf</h11>
                        <br/>
                        <h12>2016 University of St. Thomas Graduate</h12>
                        <br/>
                        <h13>Majors: Entrepreneurship & Econonmics, Minor: Biology</h13>
                        <br/>
                        <h14>#software #edtech #medicaldevice #startups</h14>
                    </div>
                </div>
            </div>
            <div className="Box">
                
            </div>
            <div className="Box">
                
            </div>
        </div>
    </div>
}
export default Mentors