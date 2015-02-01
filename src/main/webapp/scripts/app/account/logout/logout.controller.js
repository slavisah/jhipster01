'use strict';

angular.module('jhipster01App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
