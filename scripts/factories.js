'use strict';

updaterApp.factory('CameraFactory', function() {
    var factory = {};
    // Wait for PhoneGap to load
    document.addEventListener("deviceready", onDeviceReady, false);
    // PhoneGap is ready
    function onDeviceReady() {
        // Do cool things here...
    }
    /*function getImage() {*/
    factory.getImage = function() {
        // Retrieve image file location from specified source
        var result = navigator.camera.getPicture(uploadPhoto, function(message) {
            alert('get picture failed');
        }, {
            quality: 80,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA
        }
        );
    }
    function uploadPhoto(imageURI) {
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        var params = new Object();
        params.uuid = "abcd1234";
        params.value2 = "param";
        options.params = params;
        options.chunkedMode = false;
        var ft = new FileTransfer();
        ft.upload(imageURI, "http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=accountability", win, fail, options);
    }
    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
        var response = r.response;
        response = $.parseJSON(response);
        var camera_pic = response.filename;
        $scope.acct.blocks[$scope.active_block].ab_image_01 = camera_pic;
        alert('pic:' + camera_pic);
    }
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
    }


    // Samples for later reference
    var books = [
        {title: "Magician", author: "Raymond E. Feist"},
        {title: "The Hobbit", author: "J.R.R. Tolkien"}
    ];

    factory.getBooks = function() {
        return books;
    }

    factory.hello = function() { //Simply return a string value that is called inside curly braces.
        return "Hello Norm.";
    }

    factory.sayHello = function() { //A factory function referred to inside the controller
        magic();
    }
    function magic() {  //A function inside the factory that contains the action
        alert("Yikes, it is magic!");
    }
    // End of samples


    return factory;
});
/**/
