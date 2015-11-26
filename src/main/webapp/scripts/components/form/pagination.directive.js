/* globals $ */
'use strict';

angular.module('graphileApp')
    .directive('graphileAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
