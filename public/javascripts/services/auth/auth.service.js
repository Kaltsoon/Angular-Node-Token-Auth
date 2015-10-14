(function(){
  angular.module('profileApp')
    .service('authService', authService);

  function authService($http, $localStorage, apiConstant){
    var apiUrl = apiConstant.url;

    this.login = function(user){
      return $http.post(`${apiUrl}/users/authenticate`, user).then(res => {
        $localStorage.token = res.data.token;

        return res;
      });
    }

    this.logout = function(){
      $localStorage.token = null;
    }

    this.getUserLoggedIn = function(){
      return $http.get(`${apiUrl}/users/logged-in`)
        .then(user => user.data);
    }
  }
})();
