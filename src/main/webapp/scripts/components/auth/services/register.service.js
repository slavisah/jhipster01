'use strict';

angular.module('jhipster01App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


