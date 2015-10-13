(function(){
  angular.module('profileApp')
    .config(routes);

  function routes($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'javascripts/routes/login/login.template.html',
        controller: 'LoginController'
      });
  }
})();
