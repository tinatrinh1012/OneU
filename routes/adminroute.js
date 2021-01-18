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


router.post('/updateplan', function(req, res){
    
    DegreePlan.findOneAndUpdate({
        school: req.body.school, 
        major: req.body.major,
        
    }, {
        freshman1: req.body.freshman1, 
        freshmanJ: req.body.freshmanJ,
        freshman2: req.body.freshman2,
        freshmanS: req.body.freshmanS,
        
    }, function(err) {
        if (err) {
            res.send('Updating plan failed')
        } else {
            res.send('Plan updated successfully')
        }
    })

})

module.exports = router