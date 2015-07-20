var restful = require('node-restful');
var mongoose = restful.mongoose;

var tagSchema = new mongoose.Schema({
  content: String
}, { versionKey: false });

var commentSchema = new mongoose.Schema({
  body: String,
  author: String,
  stars: Number,
  created: { type: Date, default: Date.now }
}, { versionKey: false });

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    tags: [tagSchema],
    comments: [commentSchema],
    created: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = restful.model('posts', postSchema);
