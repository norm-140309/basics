'use strict';
var updaterApp = angular.module('updaterApp', [
    'ngRoute',
    'angularFileUpload',
    'ngSanitize'
]);
updaterApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts-list.html',
            controller: 'PostsPaginationController'
        })
        .when('/posts', {
            templateUrl: 'views/posts-list.html',
            controller: 'PostsPaginationController'
        })
        .when('/posts/detail/:slug', {
            templateUrl: 'views/posts-detail.html',
            controller: 'PostsDetailController'
        })
        .when('/posts/:page', {
            templateUrl: 'views/posts-list.html',
            controller: 'PostsPaginationController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
    
