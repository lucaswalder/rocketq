const express = require('express')
const route = express.Router()
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

route.get('/', (req, res) => res.render("index",{page: 'enter-room'}))
route.get('/create-room', (req, res) => res.render("index", {page: 'create-room'}))

route.get('/room/:room', roomController.open)
route.post('/create-room', roomController.create)
route.post('/insideroom', roomController.inside)

route.post('/question/:room/:question/:action', questionController.index)
route.post('/question/create/:room', questionController.create)


module.exports = route