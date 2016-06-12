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

    vm.itemArray = [
      {id: 1, name: 'first', isVisible: true},
      {id: 2, name: 'second', isVisible: true},
      {id: 3, name: 'third', isVisible: true},
      {id: 4, name: 'fourth', isVisible: true},
      {id: 5, name: 'fifth', isVisible: true}
    ];

    vm.selected = { value: vm.itemArray[0] };

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
