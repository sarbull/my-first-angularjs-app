(function() {
  var app = angular.module('blog', [ ]);

  app.controller('PostsController', function() {
    this.posts = posts;
  });

  app.controller('PostCommentsController', function() {
    this.comment = {};
    this.addComment = function(product) {
      product.comments.push(this.comment);
      this.comment = {};
    }
  });

  var posts = [
    {
      title: 'Example post title',
      category: 'blog',
      tags: ['intro', 'example', 'cool-stuff'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet incidunt voluptatem totam, ducimus provident aperiam itaque iusto commodi tempora, necessitatibus, omnis id nostrum deleniti minus, esse consectetur quia magnam excepturi!',
      comments: [
        {
          stars: 2,
          body: 'This is kinda cool',
          author: 'John Branch'
        },
        {
          stars: 2,
          body: 'I approve your message',
          author: 'Delta Dun'
        }
      ]
    },
    {
      title: 'Music is art',
      category: 'music',
      tags: ['acdc', 'pantera', 'parazitii'],
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, autem!',
      comments: []
    }
  ];
})();
