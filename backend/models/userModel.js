 const mongoose = require("mongoose")
const {Schema} = mongoose

const usersSchema = new Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        unique: true
       // match: [RegExp, 'email is not valid']
    },
    password: {
        type: String,
        required:[true, 'password is required']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    firstName :{
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    postCode: {
        type: String
    },
    votedFor:{
        type: Array
    }
})

const userModel = mongoose.model('users', usersSchema)
module.exports = userModel