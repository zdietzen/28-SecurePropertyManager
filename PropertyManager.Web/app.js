angular.module('app', ['ui.router', 'ngResource']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    
    $stateProvider
    .state('dashboard', { url: '/dashboard', templateUrl: '/templates/dashboard/dashboard.html' })


    .state('property', { abstract: true, url: '/property', template: '<ui-view />' })
        .state('property.grid', { url: '/grid', templateUrl: '/templates/property/grid.html', controller: 'PropertyGridController' })
        .state('property.detail', { url: '/detail/:id', templateUrl: '/templates/property/detail.html', controller: 'PropertyDetailController' })

    .state('tenant', { abstract: true, url: '/tenant', template: '<ui-view />' })
        .state('tenant.grid', { url: '/grid', templateUrl: '/templates/tenant/grid.html', controller: 'TenantGridController' })
        .state('tenant.detail', { url: '/detail/:id', templateUrl: '/templates/tenant/detail.html', controller: 'TenantDetailController' })

    .state('lease', { abstract: true, url: '/lease', template: '<ui-view />' })
        .state('lease.grid', { url: '/grid', templateUrl: '/templates/lease/grid.html', controller: 'TenantGridController' })
        .state('lease.detail', { url: '/detail/:id', templateUrl: '/templates/lease/detail.html', controller: 'TenantDetailController' })
});

angular.module('app').value('apiUrl', 'http://localhost:58197/api/')