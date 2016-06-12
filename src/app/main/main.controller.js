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

    $scope.itemArray = [
      {id: 1, name: 'first', isVisible: true},
      {id: 2, name: 'second', isVisible: true},
      {id: 3, name: 'third', isVisible: true},
      {id: 4, name: 'fourth', isVisible: true},
      {id: 5, name: 'fifth', isVisible: true}
    ];

    $scope.selected = { value: $scope.itemArray[0] };

    $scope.selectedList = [];


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

    $scope.changedSelect = function(item) {
      $scope.selectedList.push(item);
      $scope.findElementById(item.id)
    }

    $scope.findElementById = function(id, isShow) {
      for(var i=0; i<$scope.itemArray.length; i++) {
        if($scope.itemArray[i].id == id) {
          if(isShow) {
            $scope.itemArray[i].isVisible = true;
          } else {
            $scope.itemArray[i].isVissible = false;
          }

        }
      }
    }

    $scope.executeAction = function(type) {
      $scope.executedActions[type]();
    }

    $scope.removeFromList = function(item) {
      $scope.findElementById(item.id, true)
    }

  }
})();
