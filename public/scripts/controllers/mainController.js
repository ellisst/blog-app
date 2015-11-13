var app = angular.module('blogApp', ['ngRoute', 'feedController']);

app.config(function($routeProvider) {
   $routeProvider
         .when('/blog', {
                templateUrl : '../index.html',
         })
         .when('/signin', {
                    templateUrl : '../views/signIn.html'
         })
         .when('/feed', {
                templateUrl : '../views/feed.html',
                controller  : 'FeedCtrl'
         })
         .when('/register', {
                templateUrl : '../views/register.html'
         })
         .otherwise({redirectTo: '/feed'});
});






