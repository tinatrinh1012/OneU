const express = require('express')
var app = express()
const router = express.Router()
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/oneu', {useNewUrlParser:true, useUnifiedTopology:true}, function(err){
    if(err) {
        console.log(err)
    } else {
        console.log('Mongo DB Connectionn Successfull')
    }
})


const courseSchema = new mongoose.Schema({
    school: String, 
    subject: String, 
    acronym: String,  
    validationCode: String,
    prereq: [String],
    numberCredits: Number
});

const degreeSchema = new mongoose.Schema({
    school: String, 
    major: String, 
    plan: [
        [[String]],
        [[String]],
        [[String]],
        [[String]]
    ]
});

const coreRequirementsSchema = new mongoose.Schema({
    required: [String], 
    elective: [String]
})

const majorRequirementsSchema = new mongoose.Schema({
    major: String,
    required: [String]
})


const CourseModel = mongoose.model("courses", courseSchema); 

const DegreeModel = mongoose.model("degreeplans", degreeSchema);

const CoreRequirement = mongoose.model('corerequirements', coreRequirementsSchema);

const MajorRequirement = mongoose.model('majorrequirements', majorRequirementsSchema);


/*
const test = new CourseModel({
    school: "University of St. Thomas",
    subject: "English", 
    acronym: "ENGL 121", 
    isRequired: true,
    numberCredits: 4
})

test.save(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("add test document successful")
    }
})
*/

//var DegreePlan = mongoose.model('degreeplans', {school: String, major: String, freshman1: [String], freshmanJ: [String], freshman2: [String], freshmanS: [String]})



router.post('/getplan', function(req, res){

    DegreeModel.find({
        school: req.body.school,
        major: req.body.major
    }, function(err, documents) {
        if (err) {
            res.send('Something went wrong')
        } else {
            if (documents.length == 0) {
                res.send('Filter Failed')
            } else {
                res.send(documents)
            }
        }
    })
})

router.post('/getvalidationcode', function(req, res) {
    CourseModel.find({
        acronym: req.body.courseAcronym    
    }, function(err, documents) {
        if (err) {
            console.log("Get validation code failed")
        } else {
            if (documents.length == 0) {
                console.log("Couldn't find the course")
            } else {
                console.log("Found the course!")
                res.send(documents[0].validationCode)
            }
        }
    })
})

router.post('/validateclass', function(req, res) {
    /*
    MajorRequirement.find({
        major: req.body.major,
        required: { $elemMatch: { $eq: req.body.courseAcronym}}
    }, function(err, documents) {
        if (err) {
            console.log("Error major requirement")
        } else {
            if (documents.length == 0) {
                console.log("length = 0")
                /*
                CoreRequirement.find({
                    required: { $elemMatch: { $eq: req.body.courseAcronym}}
            
                }, function(err, documents) {
                    if (err) {
                        console.log("Validate general requirement went wrong")
                    } else {
                        if (documents.length == 0) {
                            console.log("Couldn't find general requirement, look for general elective")
                            
                            // look for elective core requirement
                            CoreRequirement.find({
                                elective: { $elemMatch: { $eq: req.body.courseAcronym}}
                            }, function (err, documents) {
                                if (err) {
                                    console.log("Validate general elective went wrong")
                                } else {
                                    if (documents.length == 0) {
                                        console.log("Cound't find general elective")
                                    } else {
                                        console.log("This is elective general")
                                        res.send("yellow")
                                    }
                                }
                            })
            
                        } else {
                            console.log("This is a required course")
                            res.send("red");
                        }
                    }
                })
                */
                /*
            } else {
                console.log(documents)
                res.send("DarkMagenta")
            }
        }
    })
    */
   
    
    CoreRequirement.find({
        required: { $elemMatch: { $eq: req.body.courseAcronym}}

    }, function(err, documents) {
        if (err) {
            console.log("Validate general requirement went wrong")
        } else {
            if (documents.length == 0) {
                console.log("Couldn't find general requirement, look for general elective")
                
                // look for elective core requirement
                CoreRequirement.find({
                    elective: { $elemMatch: { $eq: req.body.courseAcronym}}
                }, function (err, documents) {
                    if (err) {
                        console.log("Validate general elective went wrong")
                    } else {
                        if (documents.length == 0) {
                            console.log("Cound't find general elective")
                        } else {
                            console.log("This is elective general")
                            res.send("Aquamarine")
                        }
                    }
                })

            } else {
                console.log("This is a required course")
                res.send("yellow");
            }
        }
    })
    
    
    
})


module.exports = router 