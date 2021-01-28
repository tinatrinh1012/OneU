import React from 'react';
import './Mentors.css';
import Kyle_Andrews from './Kyle_Andrews.JPG';
import Mike_Schmitt from './Mike_Schmitt.JPG';
import Popup from './Popup';
import { useState } from 'react';

function Mentors() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }

    //add code
    var todo = document.querySelector( '#todolist' ),
      form = document.querySelector( 'form' ),
      field = document.querySelector( '#newitem' );
    
    form.addEventListener( 'submit', function( ev ) {
    var text = field.value;
    if ( text !== '' ) {
      todo.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">Delete</button> </li>';
      field.value = '';
      field.focus();
    }
    ev.preventDefault();
    }, false);

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

                <label for="fname">First Name  </label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <br/>
                <label for="lname">Last Name  </label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <br/>
                <input type="submit" value="Submit"/>

                </form>
            </>}
            handleClose={togglePopup}
        />}
        //addition code 
        <section>
   
            <form action="#" method="post">
            <div>
                <label for="newitem">Add item</label>
                <input type="text" name="newitem" id="newitem" 
                    placeholder="new item" />
                <input type="submit" value="Add" />
            </div>
            </form>
            <ul id="todolist"></ul>
        </section>
    </div>
}
export default Mentors

