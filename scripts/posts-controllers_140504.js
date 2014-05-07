'use strict';
//List Page
angular.module('updaterApp').controller('PostsListController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.api_url = 'http://basics.cinchcms.net/api/posts/';
    $http.get($scope.api_url).success(function(data, status){
        $scope.posts = data;
    });
    $scope.new = function(){
        $location.path( '/posts/new' );
    };
}]);


//Post Details
angular.module('updaterApp').controller('PostsDetailController', ['$scope', '$http', '$routeParams', '$location', '$sce', function($scope, $http, $routeParams, $location, $sce) {
    $scope.floats = ['Left','Right'];
    $scope.api_url = 'http://basics.cinchcms.net/api/posts/details/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.post = data[0];
        }
    });
}]);

//Youtube Directive

updaterApp.directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div class="video-container"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});

//Delete Post Page
angular.module('updaterApp').controller('PostsDeleteController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $scope.api_url = 'http://basics.cinchcms.net/api/posts/lookup/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.post = data[0];
        }
    });
    $scope.del_url = 'http://basics.cinchcms.net/api/posts/delete/';
    $scope.delete = function(data){
        $http.post($scope.del_url, data).success(function(data, status, headers){
            if(status == "200"){
                $location.path( '/posts' );
            }
        });
    };
    $scope.cancel = function(){
        $location.path( '/posts' );
    };
    $scope.organization = "CinchCMS.net";
}]);