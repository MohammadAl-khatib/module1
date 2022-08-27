'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

//app level middleware
const app = express();
app.use(cors());

//path level middleware
const logger = require('./middlewares/logger.js')
const square = require('./middlewares/square.js')
const person = require('./middlewares/person.js')

//error handlers
const serverError = require('./handlers/500.js')

const listener = (port) => {
    app.listen(port, () =>{
        console.log(`listening to ${port}`);
    })
};

app.get('/', (req, res) => {
    res.status(200). json({
        path: 'home page',
    })
})

app.get('/logger', logger,  (req, res) => {
    res.status(200). json({
        path: 'logger',
        objective: 'logged message to terminal'
    })
})

app.get('/number', square(5),  (req, res) => {
    res.status(200). json({
        path: 'square',
        objective: 'logged square of 5 to terminal'
    })
})

app.get('/person', person,  (req, res) => {
    res.status(200). json({
        path: 'person',
        objective: 'return person name uppercase',
        person: req.person,
    })
})

//error handlers must come at the end
app.use('*', serverError)

module.exports = {
    listener
}