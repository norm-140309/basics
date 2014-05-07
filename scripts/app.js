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
            controller: 'PostsListController'
        })
        .when('/posts', {
            templateUrl: 'views/posts-list.html',
            controller: 'PostsListController'
        })
        .when('/posts/:slug', {
            templateUrl: 'views/posts-detail.html',
            controller: 'PostsDetailController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
    
