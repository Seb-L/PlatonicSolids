(function() {
  'use strict';

  angular
    .module('platonicSolids')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
