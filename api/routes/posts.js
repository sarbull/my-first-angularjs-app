// Dependencies
var express = require('express');
var router  = express.Router();

// Models
var Post = require('../models/post');

// Routes
Post.methods(['get', 'put', 'post', 'delete']);
Post.register(router, '/posts');

// Return router
module.exports = router;
