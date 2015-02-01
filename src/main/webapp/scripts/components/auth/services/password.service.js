'use strict';

angular.module('jhipster01App')
    .factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {
        });
    });
