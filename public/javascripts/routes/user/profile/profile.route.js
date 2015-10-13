(function(){
  angular.module('profileApp')
    .config(routes);

  function routes($stateProvider){
    var userResolve = {
      userLoggedIn: authService => authService.getUserLoggedIn()
    }

    $stateProvider
      .state('profile', {
        url: '/profile',
        resolve: userResolve,
        abstract: true,
        controller: 'ProfileController',
        templateUrl: 'javascripts/routes/user/profile/profile.template.html'
      })
      .state('profile.show', {
        url: '',
        templateUrl: 'javascripts/routes/user/profile/show/profile-show.template.html'
      })
      .state('profile.edit', {
        url: '/edit',
        templateUrl: 'javascripts/routes/user/profile/edit/profile-edit.template.html',
        controller: 'ProfileEditController'
      })
  }
})();
