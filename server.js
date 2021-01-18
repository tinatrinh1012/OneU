const express = require('express')
var app = express()
const userroute = require('./routes/userroute')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/user', userroute)

app.get('/', function(req, res){
    res.end('This is backend')
})

app.listen(5000, ()=>{
    console.log('Server started on port 5000')
})