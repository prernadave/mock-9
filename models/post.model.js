const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    user: { },
    text: String,
    image: String,
    createdAt: Date,
    likes: [],
    comments: [{
      user: {},
      text: String,
      createdAt: Date
    }]
})

const Post = mongoose.model('Post', postSchema)
module.exports={Post}