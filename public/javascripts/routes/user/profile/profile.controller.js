(function(){
  angular.module('profileApp')
    .controller('ProfileController', ProfileController);

  function ProfileController($scope, $state, authService, userLoggedIn){
    $scope.user = userLoggedIn;

    $scope.logout = function(){
      authService.logout();

      $state.go('login');
    }
  }
})();
