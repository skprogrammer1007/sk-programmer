const mongoose = require('mongoose')
const { Schema } = mongoose;
const commentSchema = require('./CreateComment');

const Blogs = new Schema({
     title: {
          type: String,
          required: true,
     },
     programmingLanguage: {
          type: String,
          required: true,
     },
     description: {
          type: String,
          required: true,
     },
     image: {
          type: String,
     },
     hashtags: {
          type: [String],
     },
     comments: {
          type: [commentSchema]
     },
     authorName: {
          type: String,
          required: true,
     },
     likes: {
          type: Number,
          default: 0,
     },
     blogerid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Bloger',
          required: true
     },
     aproved: {
          type: Boolean,
          default: false
     },
     date: {
          type: Date,
          default: Date.now
     },
})

module.exports = Blogs