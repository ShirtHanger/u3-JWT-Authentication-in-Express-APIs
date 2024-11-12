const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

/* Importing JWT, user, and profiles routes */
const testJWTRouter = require('./controllers/test-jwt')
const usersRouter = require('./controllers/users')
const profilesRouter = require('./controllers/profiles');

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())

// Routes go here
// router.get('/', (req, res) => {
//     res.json(`Welcome to the app!`)
// })

// Inserting JWT, users, and profiles routes

// GET http://localhost:3000/test-jwt
// GET http://localhost:3000/users
// GET http://localhost:3000/profiles/:userId
app.use('/test-jwt', testJWTRouter)
app.use('/users', usersRouter)
app.use('/profiles', profilesRouter);

// router.get('/*', (req, res) => {
//     res.json({message: `404 - File not found`})
// })

app.listen(3000, () => {
    console.log('The express app is ready!')
})
