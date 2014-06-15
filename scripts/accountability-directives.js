'use strict';

updaterApp.directive('acctAnimThumb', function(){
    return{
        restrict: 'E',
        scope: {
            uuid: '='
        },
        templateUrl: "views/acct-animated-thumb.html",
        controller: function($scope, $http){
            $scope.api_url = 'http://basics.cinchcms.net/api/accountability/animated_photos/';
            $http.post($scope.api_url, $scope.uuid).success(function(data, status, headers) {
                if (status == "200") {
                    $scope.anim_pics = data;
                }
            });
        }
    };
});

