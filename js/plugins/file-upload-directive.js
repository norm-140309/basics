//inject angular file upload directives and service.
angular.module('updaterApp', ['angularFileUpload']);


//IMAGE UPLOADS
angular.module('updaterApp').controller( UploadController_1, ['$scope', '$upload', function($scope, $upload) { //UPDATE NUMBER
    //console.log($upload);
}]);
var UploadController_1 = ['$scope', '$upload', function($scope, $upload) {  //UPDATE NUMBER
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=users',  //UPDATE SITE & FOLDER
                data: {myObj: $scope.myModelObj},
                file: file, 
            }).progress(function(evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                //console.log('time to show ' + data.filename + ' on the screen');
                $scope.user.u_image_01 = data.filename;  //UPDATE VARIABLE NAME
            });
        }
    };
    $scope.delete = function(){
        $scope.user.u_image_01=""; //UPDATE VARIABLE NAME
    }
}];

angular.module('updaterApp').controller( UploadController_2, ['$scope', '$upload', function($scope, $upload) { //UPDATE NUMBER
    //console.log($upload);
}]);
var UploadController_2 = ['$scope', '$upload', function($scope, $upload) {  //UPDATE NUMBER
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=posts',  //UPDATE SITE & FOLDER
                data: {myObj: $scope.myModelObj},
                file: file, 
            }).progress(function(evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                //console.log('time to show ' + data.filename + ' on the screen');
                $scope.post.p_image_01 = data.filename;  //UPDATE VARIABLE NAME
            });
        }
    };
    $scope.delete = function(){
        $scope.post.p_image_01=""; //UPDATE VARIABLE NAME
    }
}];


angular.module('updaterApp').controller( UploadController_blocks, ['$scope', '$upload', function($scope, $upload) { 
    //console.log($upload);
}]);
var UploadController_blocks = ['$scope', '$upload', function($scope, $upload) {  
	var num = $scope.$index;
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=posts',  //UPDATE SITE & FOLDER
                data: {myObj: $scope.myModelObj},
                file: file, 
            }).progress(function(evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                $scope.post.blocks[num].pb_image_01 = data.filename;  //UPDATE VARIABLE NAME
            });
        }
    };
    $scope.delete = function(){
        $scope.post.blocks[num].pb_image_01 = "";  //UPDATE VARIABLE NAME
    }
}];


angular.module('updaterApp').controller( UploadController_acctblocks, ['$scope', '$upload', function($scope, $upload) { 
    //console.log($upload);
}]);
var UploadController_acctblocks = ['$scope', '$upload', function($scope, $upload) {  
	var num = $scope.$index;
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=accountability',  //UPDATE SITE & FOLDER
                data: {myObj: $scope.myModelObj},
                file: file, 
            }).progress(function(evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                $scope.acct.blocks[num].ab_image_01 = data.filename;  //UPDATE VARIABLE NAME
            });
        }
    };
    $scope.delete = function(){
        $scope.acct.blocks[num].ab_image_01 = "";  //UPDATE VARIABLE NAME
    }
}];


//FILE UPLOADS
angular.module('updaterApp').controller( FileUploadController_1, ['$scope', '$upload', function($scope, $upload) { //UPDATE NUMBER
    //console.log($upload);
}]);
var FileUploadController_1 = ['$scope', '$upload', function($scope, $upload) {  //UPDATE NUMBER
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://basics.cinchcms.net/api/file_upload.php?site=basics&folder=users_pdf',  //UPDATE SITE & FOLDER
                data: {myObj: $scope.myModelObj},
                file: file, 
            }).progress(function(evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                //console.log('time to show ' + data.filename + ' on the screen');
                $scope.user.u_file_01 = data.filename;  //UPDATE VARIABLE NAME
            });
        }
    };
    $scope.delete = function(){
        $scope.user.u_file_01=""; //UPDATE VARIABLE NAME
    }
}];

angular.module('updaterApp').controller( FileUploadController_2, ['$scope', '$upload', function($scope, $upload) { //UPDATE NUMBER
    //console.log($upload);
}]);
var FileUploadController_2 = ['$scope', '$upload', function($scope, $upload) {  //UPDATE NUMBER
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://basics.cinchcms.net/api/file_upload.php?site=basics&folder=posts_pdf',  //UPDATE SITE & FOLDER
                data: {myObj: $scope.myModelObj},
                file: file, 
            }).progress(function(evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                //console.log('time to show ' + data.filename + ' on the screen');
                $scope.post.p_file_01 = data.filename;  //UPDATE VARIABLE NAME
            });
        }
    };
    $scope.delete = function(){
        $scope.post.p_file_01=""; //UPDATE VARIABLE NAME
    }
}];

angular.module('updaterApp').controller( UploadController_3, ['$scope', '$upload', function($scope, $upload) { //UPDATE NUMBER
    //console.log($upload);
}]);
var UploadController_3 = ['$scope', '$upload', function($scope, $upload) {  //UPDATE NUMBER
    $scope.onFileSelect = function($files) {
        for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=accountability',  //UPDATE SITE & FOLDER
                data: {myObj: $scope.myModelObj},
                file: file, 
            }).progress(function(evt) {
                //console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                //console.log('time to show ' + data.filename + ' on the screen');
                $scope.acct.a_image_01 = data.filename;  //UPDATE VARIABLE NAME
            });
        }
    };
    $scope.delete = function(){
        $scope.acct.a_image_01=""; //UPDATE VARIABLE NAME
    }
}];