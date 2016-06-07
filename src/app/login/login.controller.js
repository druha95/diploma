/**
 * Created by andrew on 07.06.16.
 */

(function() {
  'use strict';

  angular
    .module('diploma')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, LoginResources) {
    var vm = this;
    vm.logIn = logIn;

    function logIn() {
      LoginResources.log_in({}, function(data) {

      }, function(err) {
        console.error(err);
      })
    }

  }
})();
