 'use strict';

angular.module('graphileApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-graphileApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-graphileApp-params')});
                }
                return response;
            }
        };
    });
