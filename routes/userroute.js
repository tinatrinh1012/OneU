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

const yearSchema = new mongoose.Schema({
    fall: [String],
    jterm: [String], 
    spring: [String],
    summer: [String]
})

const degreeSchema = new mongoose.Schema({
    school: String, 
    major: String, 
    plan: {
        freshman: yearSchema, 
        sophomore: yearSchema, 
        junior: yearSchema, 
        senior: yearSchema
    }
});


const CourseModel = mongoose.model("courses", courseSchema); 

//const DegreeModel = mongoose.model("degreeplans", degreeSchema);

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

var DegreePlan = mongoose.model('degreeplans', {school: String, major: String, freshman1: [String], freshmanJ: [String], freshman2: [String], freshmanS: [String]})

router.post('/getplan', function(req, res){

    DegreePlan.find({
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



module.exports = router 