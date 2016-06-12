/**
 * Created by andrew on 12.06.16.
 */

(function() {
  'use strict';

  angular
    .module('diploma')
    .controller("UsersController", UsersController);

  function UsersController(DTOptionsBuilder, DTColumnBuilder, $resource) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
      return $resource('data.json').query().$promise;
    }).withPaginationType('full_numbers');

    vm.dtColumns = [
      DTColumnBuilder.newColumn('id').withTitle('ID'),
      DTColumnBuilder.newColumn('firstName').withTitle('First name'),
      DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    ];
  }

})()
