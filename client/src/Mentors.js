import React from 'react';
import './Mentors.css';
import Kyle_Andrews from './Kyle_Andrews.JPG';
import Mike_Schmitt from './Mike_Schmitt.JPG';
import Popup from './Popup';
import { useState } from 'react';

function Mentors() {
    Boolean = false;
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }
    const submit = () => {
        setIsOpen(!isOpen);
        Boolean = true;
    }
    return <div>
        <h5>Mentors List</h5>
        <div className= "Container">
            <div className="Box">
                <div className = "Cover">
                    <div><img src={Kyle_Andrews} alt="Avatar"></img></div>
                    <div><h15>Kyle Andrews</h15></div>
                </div>
                <div className="Content">
                        <h12>Kyle Andrews</h12>
                        <h11>Sales Engineer @ Jamf</h11>
                        <h11>2016 University of St. Thomas Graduate</h11>
                        <h11>Majors: Entrepreneurship and Econonmics, Minor: Biology</h11>
                        <h11>#software #edtech #medicaldevice #startups</h11>
                        <br/>

                        <input
                            type="button"
                            class="btn btn-outline-light btn-lg"
                            value="Connect"
                            onClick={togglePopup}
                        />
                </div>
            </div>
            <div className="Box">
                <div className = "Cover">
                    <img src={Mike_Schmitt} alt="Avatar"/>
                    <br/>
                    <h15>Mike Schmitt</h15>
                </div>
                <div className="Content">
                        <h12>Mike Schmitt</h12>
                        <h11>Regional Sales Manager @ Fetch</h11>
                        <h11>2016 University of St. Thomas Graduate</h11>
                        <h11>Majors: Entrepreneurship</h11>
                        <h11>#sales #loT #multifamily #realestate</h11>
                        <br/>
                        <input
                            type="button"
                            class="btn btn-outline-light btn-lg"
                            value="Connect"
                            onClick={togglePopup}
                        />
                </div>
            </div>
        </div>  
        {isOpen && <Popup
            content={<>
                <form action="action_page.php">
                <h1>Connect With A Mentor Form</h1>
                <br/>
                <select className = "dropdown" class="form-control" id="Mentors">
                    <option defaultValue>Pick a mentor</option>
                    <option>Kyle Andrews</option>
                    <option>Mike Schmitt</option>
                </select>
                <label for="fname">What is your name?</label>
                <br/>
                <input type="Name" class="form-control" id="fname" name="firstname" placeholder="Ex. John Doe"/>
                <label for="lname">What is your email?</label>
                <br/>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <label for="lname">What are you studying?</label>
                <input type="Major" class="form-control" id="exampleFormControlInput1" placeholder="Ex. Entrepreneurship"/>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Why do you want to connect?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <input type="submit" value="Submit" 
                onClick= {submit}/>
                </form>
            </>}
            handleClose={togglePopup}
        />}
        {!isOpen && Boolean == true && <Popup
            content={<>
                <form action="action_page.php">
                <h1>Thank you!</h1>
                </form>
            </>}
            handleClose={togglePopup}
        />}
    </div>
}
export default Mentors

