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

    /*
    var plan = new DegreePlan({school: req.body.school, major: req.body.major}) 
    
    plan.save(function(err){
        if (err) {
            res.send('Something went wrong')
        } else {
            res.send('Filter plan successfull')
        }
    })
    */
})



module.exports = router 