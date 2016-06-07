/**
 * Created by andrew on 08.06.16.
 */

(function() {
  'use strict';

  angular
    .module('diploma')
    .factory('LoginResources', LoginResources);

  /** @ngInject */
  function LoginResources($resource) {
    return $resource("/", {}, {
      log_in: {method:'POST'}
    }, {
      stripTrailingSlashes: true
    })
  }

})();
