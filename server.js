const express = require('express')
var app = express()

app.get('/', function(req, res){
    res.end('This is backend')
})

app.listen(5000, ()=>{
    console.log('Server started on port 5000')
})