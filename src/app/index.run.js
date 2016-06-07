(function() {
  'use strict';

  angular
    .module('diploma')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
