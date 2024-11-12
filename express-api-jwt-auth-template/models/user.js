const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    hashedPassword: {type: String, required: true}
})

/* Prevents any part of schema (password) from being sent back in API responses */

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User