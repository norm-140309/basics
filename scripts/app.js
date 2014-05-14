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
        .when('/posts/section/:section', {
            templateUrl: 'views/posts-list.html',
            controller: 'PostsSectionController'
        })
        .when('/acct/new', {
            templateUrl: 'views/acct-new.html',
            controller: 'AcctNewController'
        })
        .when('/acct/edit/:index', {
            templateUrl: 'views/acct-edit.html',
            controller: 'AcctEditController'
        })
        .when('/acct/detail/:slug', {
            templateUrl: 'views/acct-detail.html',
            controller: 'AcctDetailController'
        })
        .when('/acct/delete/:index', {
            templateUrl: 'views/acct-delete.html',
            controller: 'AcctDeleteController'
        })
        .when('/acct', {
            templateUrl: 'views/acct-list.html',
            controller: 'AcctPaginationController'
        })
        .when('/acct/login', {
            templateUrl: 'views/acct-login.html',
            controller: 'AcctLoginController'
        })
        .when('/acct/logout', {
            templateUrl: 'views/acct-login.html',
            controller: 'AcctLogoutController'
        })
        .when('/acct/signup', {
            templateUrl: 'views/acct-signup.html',
            controller: 'AcctSignupController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
    
