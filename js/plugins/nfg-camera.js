// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap is ready
function onDeviceReady() {
    // Possibly init vars here...
}
function getImage() {
    navigator.camera.getPicture(uploadPhoto, function(message) {
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
    options.headers = {
        Connection: "close"
    };
    var ft = new FileTransfer();
    ft.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
            $('.progress').show();
            var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
            $('.camera_status').text(perc + "%");
            $('.progress-bar').css("width", perc + "%");
        }
    };
    ft.upload(imageURI, "http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=accountability", win, fail, options);
}
function win(r) {
    var resp = $.parseJSON(r.response);
    var camera_pic = resp.filename;
    pushPicToScope(r);
    $('.camera_status').text("Image upload complete.");
    $('.progress').fadeOut("slow");
}
function fail(error) {
    alert("An error has occurred: Code = " + error.code);
}
function pushPicToScope(r){
    angular.element(document.getElementById('CameraId')).scope().doLoadImage(r);
}