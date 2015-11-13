var app = angular.module('feedController', ['ngRoute']);
app.controller('FeedCtrl', function($scope, $http) {
    var refresh = function() {
        $scope.post = {};
    }

    $http.get("/posts").success(function(response) {
        $scope.posts = response;
    });

    $scope.addPost = function() {
        $http.post("/posts", $scope.post).success(function(response) {
            $scope.posts.push(response);
        });
        refresh();
    }

    $scope.removePost = function(id, index) {
        $http.delete("/posts/" + id).success(function(response) {
            $scope.posts.splice(index, 1)
        });
    }

     $scope.editPost = function(post) {
        $scope.post = post;
    }

    $scope.updatePost = function(id) {
        $http.put("/posts/" + id, $scope.post).success(function(response) {
            refresh();
        });
    }

});







