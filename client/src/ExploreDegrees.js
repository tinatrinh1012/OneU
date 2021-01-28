import React, { useState } from 'react'
import axios from 'axios'
import './DropdownFilter.css'
import ReactDOM from 'react-dom';
import './ExploreDegrees.css'


function ExploreDegrees() {

    const[school, setSchool] = useState('')
    const[major, setMajor] = useState('')

    const FRESHMAN = 0;
    const SOPHOMORE = 1;
    const JUNIOR = 2;
    const SENIOR = 3;
    const FALL = 0;
    const JTERM = 1;
    const SPRING = 2;
    const SUMMER = 3;

    var localPlan;
    var planArray;

    function createPlan(event) {

        event.preventDefault()

        var filter = {
            school: school,
            major: major
        }

        axios.post('/api/user/getplan', filter)
        .then(res=>{
            
            planArray = res.data[0].plan;
            //console.log(planArray)
            localPlan = [...planArray];
            console.log(localPlan);
            ReactDOM.render(degreeTable.render(), document.getElementById("degreetable"));
            //document.getElementById("fye").checked = true
            //validateAll()

        }).catch(err=>{
            console.log(err)
        })

    }

    var degreeTable = {
        classesRender: function() {
            return <tbody>
                {localPlan.map((year, yearCount) => {
                    return <tr key={yearCount}>

                        {year.map((term, termCount) => {
                            return <td key={termCount}>

                                {term.map((course, courseCount) => {
                                                                     
                                    return <div key={courseCount}>
                                        <p id={course} className="courseName" onClick={()=>removeCourse(yearCount, termCount, courseCount)}>{course}</p>
                                    </div>
                                     
                                })}

                                <button onClick={()=>addCourse(yearCount, termCount)} className="btn btn-success">Add</button>
                        
                            </td>
                        })}

                    </tr>
                })}
            </tbody>
        },

        render: function() {
            return <div>

                <div id="checkbox">
                    <input type="checkbox" id="fye" name="fye"/>
                    <label htmlFor="fye"> First-Year Experience </label> <br/>

                    <input id="literature" type="checkbox" name="literature"/>
                    <label htmlFor="literature"> Literature and Writing </label> <br/>

                    <input id="history" type="checkbox" name="history"/>
                    <label htmlFor="history"> Historical Studies </label> <br/>

                    <button className="btn btn-primary" onClick={validateAll}>Validate Plan</button> <br/> <br/>

                </div>

                <table className="table table-dark table-bordered">
                    
                    <thead>
                        <tr>
                            <th>Fall</th>
                            <th>J-term</th>
                            <th>Spring</th>
                            <th>Summer</th>
                        </tr>
                    </thead>

                    {this.classesRender()}
                </table>
            </div>
        }, 

        validate: function(acronym) {

            var property = {
                courseAcronym: acronym,
                major: major
            }
            
            axios.post('/api/user/validateclass', property)
            .then(res=>{
                //response: color value
                document.getElementById(acronym).style.color = res.data;
            }).catch(err=>{
                console.log(err)
            })
        }
       
    }


    //var validation = {

        function validateFYE() {
            var counter = 2;
            for (let term = FALL; term <= SUMMER; term++) {
                for (let course = 0; course < localPlan[FRESHMAN][term].length; course++) {
                    if (localPlan[FRESHMAN][term][course] == "FYEX 100") {
                        counter = counter - 1;
                        document.getElementById("FYEX 100").style.color = "yellow"
                    }
                    if (localPlan[FRESHMAN][term][course] == "FYEX 150") {
                        counter = counter - 1;
                        document.getElementById("FYEX 150").style.color = "yellow"
                    }
                    if (counter == 0) {
                        return true;
                    }
                }
            }
            return false;
        }

        function validateLiterature() {
            for (let year = FRESHMAN; year < localPlan.length; year++) {
                for (let term = FALL; term <= localPlan[year].length; term++) {
                    // fix bug: check if length > 0 since jterm and summer can have 0 class => empty array
                    for (let course = 0; course < localPlan[year][term].length; course++) {
                        if (localPlan[year][term][course] == "ENGL 121") {
                            document.getElementById("ENGL 121").style.color = "Aquamarine"
                            return true;
                        } else if (localPlan[year][term][course] == "ENGL 190") {
                            document.getElementById("ENGL 190").style.color = "Aquamarine"
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        function validateHistory() {
            var hist = ["HIST 111", "HIST 112", "HIST 113", "HIST 114", "HIST 115", "HIST 117", "HIST 118", "HIST 119"];
            for (let year = FRESHMAN; year < localPlan.length; year++) {
                for (let term = FALL; term <= localPlan[year].length; term++) {
                    for (let course = 0; course < localPlan[year][term].length; course++) {
                        if (hist.includes(localPlan[year][term][course])) {
                            document.getElementById(localPlan[year][term][course]).style.color = "Aquamarine"
                            return true;
                        }
                    }
                }
            }
            return false
        }

        
        function validateAll() {
            // this function use validate function for all requirements
            if (validateFYE()) {
                document.getElementById("fye").checked = true;
            }
            if (validateLiterature()) {
                document.getElementById("literature").checked = true;
            }
            if(validateHistory()) {
                document.getElementById("history").checked = true;
            }
        }
        
    //}

    function addCourse(year, term) {
        localPlan[year][term].push("HIST 115");
        console.log(localPlan)
        ReactDOM.render(degreeTable.render(), document.getElementById("degreetable"));
        //validate here again if want to do auto
    }

    function removeCourse(year, term, course) {
        // bug: when remove the last element, lose the array of that term => need to maintain the array
        localPlan[year][term].splice(course, 1);
        ReactDOM.render(degreeTable.render(), document.getElementById("degreetable"));
    }
    

    return <div>
            <h5>Explore Degrees</h5>
            <form onSubmit={createPlan}> 

                <select id="schoolList" onChange={()=>{setSchool(document.getElementById('schoolList').value)}}>
                    <option defaultValue>Select a school</option>
                    <option>University of St. Thomas</option>
                    <option>University of Minnesota</option>
                </select>
                <br/>

                <select id="majorList" onChange={()=>{setMajor(document.getElementById('majorList').value)}}>
                    <option defaultValue>Select a major</option>
                    <option>Entrepreneurship</option>
                    <option>Computer Science</option>
                </select> 
                <br/>

                <input id="button" type="submit" value='Create a degree plan' className='btn btn-primary'/>

            </form>
            
            <div id="degreetable" style={{"marginTop": "50px"}}>
            </div>    

                   

    </div>
}

export default ExploreDegrees