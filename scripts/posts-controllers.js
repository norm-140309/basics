'use strict';
//List Page
angular.module('updaterApp').controller('PostsListController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $scope.api_url = 'http://basics.cinchcms.net/api/posts/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        $scope.posts = data;
    });
    $scope.new = function(){
        $location.path( '/posts/new' );
    };
}]);


//List Pagination Page
angular.module('updaterApp').controller('PostsPaginationController', ['$scope', '$http', '$routeParams', '$location', '$sce', function($scope, $http, $routeParams, $location, $sce) {
    $scope.api_url = 'http://basics.cinchcms.net/api/posts/pagination/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.posts = data;
        }
    });
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
    restrict: 'A',
    scope: { 
    	code:'=',
        ytid:'=' 
    },
    replace: true,
    template: '<div class="video-container" id="video{{ytid}}"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{ytsrc}}" frameborder="0" allowfullscreen></iframe></div>',
    controller: function($scope, $sce){
      	if($scope.code){ 
        	$scope.ytsrc = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.code);
        	//console.log('trusted: '+$scope.ytsrc+" | id: "+$scope.myid); 
      	}else{
        	$scope.ytsrc = "";
      	}
    }
  };
});

//Externally Linked MP3 Files
updaterApp.directive('myMp3', function($sce) {
    return{
    	restrict: 'A',
        scope: { 
        	rawsrc: '=',
            myid: '='
        },
        controller: function($scope, $sce){
            if($scope.rawsrc){ 
                $scope.mp3src = $sce.trustAsResourceUrl($scope.rawsrc);
                //console.log('trusted: '+$scope.mp3src+" | id: "+$scope.myid); 
            }else{
            	$scope.mp3src = "";
            }
        },
        replace: 'true',
        template: '<audio controls id="player{{myid}}"><source src="{{mp3src}}" type="audio/mpeg"></audio>'
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