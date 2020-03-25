/**
 * @date 22-03-2020
 * @author UkB
 * @description this class describes the User domain
 */
require('./dir')
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')


// CORS
const  cors = function(req, res, next) {
    res.header("X-Powered-By", "tweet")
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', ['Content-Type', 'Authorization', 'X-Access-Token'])
    next()
}

const port = process.env.PORT || 5644
const app = express()

// Body PArser
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))


// Router
const routes = require('./routes')


app.use('/api',cors)
app.use('/api', routes)


// 404 err0rs
app.use((req, res) => {
  res.status(404).send(`You Shouldn't Be Here....
  There's Nothing For You here`)
});

// Listen
app.listen(port, () =>{ console.log( `Running on ${port}`)})