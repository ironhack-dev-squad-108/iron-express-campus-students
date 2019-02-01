const mongoose = require('mongoose')
const Campus = require('../models/Campus')
const Student = require('../models/Student')
const dataCampuses = require('./data-campuses') // Starts with './' because it's a file

mongoose
  .connect('mongodb://localhost/iron-express-campus-students', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

Campus.create(dataCampuses)
  .then(() => {
    console.log('Done');
  })
  .catch(err => {
    console.log('Error:', err)
  })
