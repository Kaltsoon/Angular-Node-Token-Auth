(function(){
  angular.module('profileApp')
    .config(routes);

  function routes($urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
  }
})();
