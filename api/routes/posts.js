// Dependencies
var express = require('express');
var router  = express.Router();

// Models
var Post = require('../models/post');

// Routes
Post.methods(['get', 'put', 'post', 'delete']);

router.get('/posts/:post_id/comments', function(req, res, next) {
  Post.findById(req.params.post_id, function (err, p) {
    res.send(p.comments);
  });
});

router.get('/posts/:post_id/comments/:comment_id', function(req, res, next) {
  Post.findById(req.params.post_id, function (err, p) {
    res.send(p.comments.id(req.params.comment_id));
  });
});


Post.register(router, '/posts');

// Return router
module.exports = router;
