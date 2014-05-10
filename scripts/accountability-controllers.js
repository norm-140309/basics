'use strict';

//List Pagination Page
angular.module('updaterApp').controller('AcctPaginationController', ['$scope', '$http', '$routeParams', '$location', '$sce', function($scope, $http, $routeParams, $location, $sce) {
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/pagination/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.accts = data;
        }
    });
}]);

//New Accountability Post
angular.module('updaterApp').controller('AcctNewController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $scope.load_new = function(){
        var data = { 
                        a_name: '',
                        a_date_displayed: '',
                        a_summary: '',
                        blocks: []
                   };
        $scope.acct = data;
        $(".datepicker").datepicker({
            onClose: function() { 
                var my_model = $(this).attr('ng-model');
                my_model = my_model.split(".");my_model = my_model[1];
                //console.log( 'set model: '+my_model+' to value: '+$(this).val() ); 
                $scope.acct[my_model] = $(this).val();
            }
        });
    } 
    $scope.load_new();
    $scope.save_url = 'http://basics.cinchcms.net/api/accountability/new/';
    $scope.store_new = function(){
        var data = { 
                        a_name: $scope.acct.a_name,
                        a_date_displayed: $scope.acct.a_date_displayed,
                        a_summary: $scope.acct.a_summary,
                        blocks: $scope.acct.blocks
                   }; 
        $http.post($scope.save_url, data).success(function(data, status, headers){
            if(status == "200"){
                $location.path( '/acct' );
            }
        });
    }
    $scope.add_block = function(){
    	$scope.acct.blocks.push({
        	ab_id: 0,
        	ab_title: '',
            ab_image_01: '',
            ab_file_01: '',
            ab_file_01_display_name: '',
            ab_copy: '',
            ab_mp3: '',
            ab_members_fk: 0
        });
    };
    $scope.remove_block = function(index){
    	$scope.acct.blocks.splice(index, 1);
    };
}]);

//Accountability Post Details
angular.module('updaterApp').controller('AcctDetailController', ['$scope', '$http', '$routeParams', '$location', '$sce', function($scope, $http, $routeParams, $location, $sce) {
    $scope.floats = ['Left','Right'];
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/details/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.acct = data[0];
        }
    });  
}]);