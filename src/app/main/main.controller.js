(function() {
  'use strict';

  angular
    .module('diploma')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, FileUploader, $scope) {
    $scope.uploader = new FileUploader({
      formData: [{
        "key": "lalalal"
      }]
    });


    $scope.executedActions = {
      'uploadAll': function() {
        $scope.uploader.uploadAll()
      },
      'removeAll': function() {
        $scope.uploader.clearQueue()
      },
      'cancelAll': function() {
        $scope.uploader.cancelAll()
      }
    };

    $scope.getFileStatus = function(item) {
      if(item.isReady) {
        return "ready"
      }

      if(item.isUploading){
        return "uploading"
      }

      if(item.isUploaded) {
        return "uploaded"
      }

      if(item.isSuccess){
        return "success"
      }

      if(item.isCancel) {
        return "cancel"
      }

      if(item.isError) {
        return "error"
      }
    }

    $scope.executeAction = function(type) {
      $scope.executedActions[type]();
    }

  }
})();
