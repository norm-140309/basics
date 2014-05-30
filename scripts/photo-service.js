'use strict';

/* jshint global: google */
angular.module('updaterApp')
        .service('PhotoService', function(PhoneGap) {
    return {
        upload: function(image, success, error, progress) {
            PhoneGap.ready().then(function () {
                    var ft = new FileTransfer();
                    var options = new FileUploadOptions();
                    options.fileKey = 'file';
                    options.fileName = image.substr(image.lastIndexOf('/') + 1);
                    options.params = {
                        title: 'first upload'
                    };
                    ft.upload(picture, encodeURI("http://basics.cinchcms.net/api/image_upload.php?site=basics&folder=accountability"), function(res) {
                        if (success) {
                            success(res);
                        }
                    }, function(err) {
                        if (error) {
                            error(err);
                        }
                    }, options);
                    ft.onprogress = progress;
                    alert(options.fileName+' has been uploaded.');
                });
        }
    };
});