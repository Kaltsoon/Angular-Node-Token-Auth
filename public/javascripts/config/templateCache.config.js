angular.module("profileApp").run(["$templateCache", function($templateCache) {$templateCache.put("routes/login/login.template.html","<h1>Login</h1>\n\n<div class=\"alert alert-danger\" ng-show=\"error\">{{error}}</div>\n\n<form ng-submit=\"login()\">\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" ng-model=\"user.email\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"user.password\">\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n</form>\n");
$templateCache.put("routes/user/profile/profile.template.html","<button ng-click=\"logout()\" class=\"btn btn-default\">Logout</button>\n\n<a ui-sref=\"profile.show\" class=\"btn btn-info\">Me</a>\n<a ui-sref=\"profile.edit\" class=\"btn btn-primary\">Edit profile</a>\n\n<div ui-view></div>\n");
$templateCache.put("routes/user/profile/edit/profile-edit.template.html","<h1>Edit profile {{user.email}}</h1>\n<button class=\"btn btn-default\" ng-click=\"save()\">Save</button>\n");
$templateCache.put("routes/user/profile/show/profile-show.template.html","<h1>Profile of {{user.email}}</h1>\n");}]);