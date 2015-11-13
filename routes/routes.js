var Post = require('../models/post');

module.exports = function(app) {

    app.get("/posts", function(req, res) {
         Post.find({}, function(err, posts) {
            res.json(posts);
         });
    });

    app.post("/posts", function(req, res) {
         var newPost = new Post(req.body);
         newPost.name = req.body.name;
         newPost.email = req.body.email;
         newPost.number = req.body.number;
         newPost.save(function(err, doc) {
            res.json(doc);
         });
    });

    app.delete("/posts/:id", function(req, res) {
          var id = req.params.id;
          Post.remove({_id: id}, function(err, doc) {
             res.json(doc);
          });
    });

    app.put("/posts/:id", function(req, res) {
           var updatedPost = {
                name: req.body.name,
                email: req.body.email,
                number: req.body.number
           };
           Post.update({_id: req.body._id}, updatedPost, function(err, doc) {
               res.json(doc);
           });
    });

}