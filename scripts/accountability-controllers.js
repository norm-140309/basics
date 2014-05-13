'use strict';

updaterApp.controller('NavController', function ($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.isCollapsed = true;
    });
});

//List Pagination Page
angular.module('updaterApp').controller('AcctPaginationController', ['$scope', '$http', '$routeParams', '$location', '$sce', '$window', function($scope, $http, $routeParams, $location, $sce, $window) {
	if(typeof $window.sessionStorage.loggedin == 'undefined'){	$location.path( '/acct/login' ); }
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/pagination/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.accts = data;
        }
    });
}]);

//New Accountability Post
angular.module('updaterApp').controller('AcctNewController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window) {
	if(typeof $window.sessionStorage.loggedin == 'undefined'){	$location.path( '/acct/login' ); }
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
angular.module('updaterApp').controller('AcctDetailController', ['$scope', '$http', '$routeParams', '$location', '$sce', '$window', function($scope, $http, $routeParams, $location, $sce, $window) {
	if(typeof $window.sessionStorage.loggedin == 'undefined'){	$location.path( '/acct/login' ); }
    $scope.floats = ['Left','Right'];
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/details/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.acct = data[0];
        }
    });  
}]);


//Accountability Edit Post
angular.module('updaterApp').controller('AcctEditController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window) {
	if(typeof $window.sessionStorage.loggedin == 'undefined'){	$location.path( '/acct/login' ); }
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/lookup/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.acct = data[0];
            $(".datepicker").datepicker({
            	onClose: function() { 
                    var my_model = $(this).attr('ng-model');
                    my_model = my_model.split(".");my_model = my_model[1];
                    //console.log( 'set model: '+my_model+' to value: '+$(this).val() ); 
                    $scope.acct[my_model] = $(this).val();
                }
            });
        }
    });
    $scope.save_url = 'http://basics.cinchcms.net/api/accountability/save/';
    $scope.store = function(data){
       $http.post($scope.save_url, data).success(function(data, status, headers){
            if(status == "200"){
                $location.path( '/acct' );
            }
        });
    };
    $scope.cancel = function(){
        $location.path( '/acct' );
    };
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

//Accountability Post Page
angular.module('updaterApp').controller('AcctDeleteController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
	if(typeof $window.sessionStorage.loggedin == 'undefined'){	$location.path( '/acct/login' ); }
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/lookup/';
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        if(status == "200"){
            $scope.acct = data[0];
        }
    });
    $scope.del_url = 'http://basics.cinchcms.net/api/accountability/delete/';
    $scope.delete = function(data){
        $http.post($scope.del_url, data).success(function(data, status, headers){
            if(status == "200"){
                $location.path( '/acct' );
            }
        });
    };
    $scope.cancel = function(){
        $location.path( '/acct' );
    };
}]);

//Accountability Login Page
angular.module('updaterApp').controller('AcctLoginController', ['$scope', '$http', '$routeParams', '$location', '$window',  function($scope, $http, $routeParams, $location, $window){
    //console.log('uuid: '+$window.sessionStorage.token);
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/login/';
    $scope.login = function(data){
        $http.post($scope.api_url, data).success(function(data, status, headers){
            /* console.log('in module login result: '+data); */

            if(data.length == 8){
            	$scope.wrongCredentials = false;
                $window.sessionStorage.token = data;
                $window.sessionStorage.loggedin = true;
                $('#login-alert').hide();
                $('#login-link').hide();
                $('#logout-link').show();
                $location.path( '/acct' );
            }else{
            	$scope.wrongCredentials = true;
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.loggedin;
                if(typeof $scope.acct !== 'undefined'){
                    $scope.acct.password = '';
                }
                $('#login-alert').show();
                $('#logout-link').hide();
                $('#login-link').show();
            }
            
        });
    };
}]);

//Accountability Logout Page
angular.module('updaterApp').controller('AcctLogoutController', ['$scope', '$http', '$routeParams', '$location', '$window',  function($scope, $http, $routeParams, $location, $window){
    //console.log('uuid: '+$window.sessionStorage.token);
    $scope.api_url = 'http://basics.cinchcms.net/api/accountability/login/';
    var data = {"email":"", "password":""};
    $http.post($scope.api_url, $routeParams).success(function(data, status, headers){
        $scope.wrongCredentials = true;
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.loggedin;
        $('#logout-link').hide();
        $('#login-link').show();
        $location.path( '/acct/login' );
    });
}]);
                    
