(function() {
  'use strict';

  angular
    .module('diploma')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, FileUploader) {

    var vm = this;

    vm.uploader = new FileUploader({
      formData: [{
        "key": "lalalal"
      }]
    });

    vm.itemArray = [
      {id: 1, name: 'first', isVisible: true},
      {id: 2, name: 'second', isVisible: true},
      {id: 3, name: 'third', isVisible: true},
      {id: 4, name: 'fourth', isVisible: true},
      {id: 5, name: 'fifth', isVisible: true}
    ];

    vm.dataList = [
      {
        name: "lalal",
        type: "folder",
        size: "4 GB"
      },
      {
        name: "blala",
        type: "file",
        size: "2KB"
      }
    ]

    vm.selected = { value: vm.itemArray[0] };

    vm.selectedList = [];


    vm.executedActions = {
      'uploadAll': function() {
        vm.uploader.uploadAll()
      },
      'removeAll': function() {
        vm.uploader.clearQueue()
      },
      'cancelAll': function() {
        vm.uploader.cancelAll()
      }
    };

    vm.getFileStatus = function(item) {

      if(item.isUploading){
        return "uploading"
      }

      if(item.isUploaded) {
        return "ok"
      }

      if(item.isSuccess){
        return "ok"
      }

      if(item.isCancel) {
        return ""
      }

      if(item.isError) {
        return "remove"
      }
    }

    vm.changedSelect = function(item) {
      vm.selectedList.push(item);
      vm.findElementById(item.id)
    }

    vm.findElementById = function(id, isShow) {
      for(var i=0; i<vm.itemArray.length; i++) {
        if(vm.itemArray[i].id == id) {
          if(isShow) {
            vm.itemArray[i].isVisible = true;
          } else {
            vm.itemArray[i].isVissible = false;
          }

        }
      }
    }

    vm.executeAction = function(type) {
      vm.executedActions[type]();
    }

    vm.removeFromList = function(item) {
      vm.findElementById(item.id, true)
    }

  }
})();
