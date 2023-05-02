

const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    bio: String,
    posts: [{ type: ObjectId, ref: 'Post' }],
    friends: [{ type: ObjectId, ref: 'User' }],
    friendRequests: [{ type: ObjectId, ref: 'User' }]
})

const User = mongoose.model('User', userSchema)
module.exports={User}
// "name": "Prerna",
//   "email": "prerna@gmail.com",
//   "password": "radhey",
//   "dob": "1999-12-14",
//   "bio": "I am web developwe"
// 6450b310092ff51dcd28e92b