(function(){
  angular.module('profileApp')
    .controller('LoginController', LoginController);

  function LoginController($scope, $state, authService, $stateParams){
    $scope.user = {};
    $scope.error = $stateParams.errorMessage;

    $scope.login = function(){
      authService.login($scope.user)
        .then(res => {
          $state.go('profile.show', { successMessage: 'Welcome back!' });
        })
        .catch(res => {
          switch(res.data.message){
            case 'WRONG_EMAIL_OR_PASSWORD':
              $scope.error = 'Wrong email or password.';
              break;
            case 'NO_EMAIL_OR_PASSWORD_PROVIDED':
              $scope.error = 'Please, provide email and password.';
              break;
          }
        });
    }
  }
})();
