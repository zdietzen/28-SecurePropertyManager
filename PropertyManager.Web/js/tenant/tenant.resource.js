angular.module('app').factory('Tenant', function ($resource, apiUrl) {

    return $resource(apiUrl + 'tenants/:id', { id: '@TenantId' }, {
        update: {
            method: 'PUT'
        }
    });
});