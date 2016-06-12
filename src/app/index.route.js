(function() {
  'use strict';

  angular
    .module('diploma')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/users', {
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
