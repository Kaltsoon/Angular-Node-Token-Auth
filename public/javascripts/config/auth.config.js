(function(){
  angular.module('profileApp')
    .config(authConfig);

  function authConfig($httpProvider){
    $httpProvider.interceptors.push(($q, $injector, $localStorage) => {
      return {
        'request': function (config) {
          config.headers = config.headers || {};

          if ($localStorage.token) {
            config.headers.Authorization = 'Bearer ' + $localStorage.token;
          }

          return config;
        },
        'responseError': function(response) {
          var invalidTokenMessages = ['INVALID_TOKEN', 'NO_TOKEN_PROVIDED'];
          var state = $injector.get('$state');

          if(response.status === 403 && invalidTokenMessages.indexOf(response.data.message) >= 0) {
            state.go('login', { errorMessage: 'Please, login first.' });
          }

          return $q.reject(response);
        }
      };
    });
  }
})();
