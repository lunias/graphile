'use strict';

angular.module('graphileApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


