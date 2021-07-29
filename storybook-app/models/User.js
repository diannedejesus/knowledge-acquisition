const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    //TODO: Add requiered id option
    googleId: {
        type: String,
    },
    microsiftId: {
        type: String,
    },
    displayName: {
        type: String,
        required: true
    },
   firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
        //required: true
    },
   image: {
        type: String
    },
   createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)