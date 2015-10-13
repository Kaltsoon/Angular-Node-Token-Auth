(function(){
  angular.module('profileApp')
    .controller('ProfileEditController', ProfileEditController);

  function ProfileEditController($scope, $state){
    $scope.save = function(){
      $state.go('profile.show');
    }
  }
})();
