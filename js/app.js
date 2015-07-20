(function() {
  var app = angular.module('blog', [ ]);

  app.controller('PostsController', ['$http', function($http) {
    var source = this;

    $http.get('http://angularjs.dev/posts').success(function(data) {
      source.posts = data;
    });

    // var post = {
    //   title: 'Example post',
    //   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam provident, at dicta quas aliquid labore itaque ut expedita voluptatem aliquam alias quis natus inventore culpa nisi incidunt nobis ipsa, dolore.',
    //   tags: [{content: 'example1'},{content: 'example2'}],
    //   comments: [],
    //   category: "Example"
    // };
    // $http.post('http://angularjs.dev/posts', post).success(function(data) {
    //   console.log(data);
    // });
  }]);

  app.controller('PostCommentsController', ['$http', function($http) {
    this.comment = {};
    this.addComment = function(post) {
      post.comments.push(this.comment);
      $http.put('http://angularjs.dev/posts/' + post._id, post);
      this.comment = {};
    }
  }]);

  // var posts = [
  //   {
  //     title: 'Example post title',
  //     category: 'blog',
  //     tags: ['intro', 'example', 'cool-stuff'],
  //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet incidunt voluptatem totam, ducimus provident aperiam itaque iusto commodi tempora, necessitatibus, omnis id nostrum deleniti minus, esse consectetur quia magnam excepturi!',
  //     comments: [
  //       {
  //         stars: 2,
  //         body: 'This is kinda cool',
  //         author: 'John Branch'
  //       },
  //       {
  //         stars: 2,
  //         body: 'I approve your message',
  //         author: 'Delta Dun'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Music is art',
  //     category: 'music',
  //     tags: ['acdc', 'pantera', 'parazitii'],
  //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, autem!',
  //     comments: []
  //   }
  // ];
})();
