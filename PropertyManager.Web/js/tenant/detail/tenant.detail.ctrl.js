angular.module('app').controller('TenantDetailController', function ($scope, $stateParams, Tenant, $state) {

    if ($stateParams.id) {
        $scope.tenant = Tenant.get({ id: $stateParams.id });
    } else {
        $scope.tenant = new Tenant();
    }

    $scope.saveTenant = function () {
        if ($scope.tenant.TenantId) {
            $scope.tenant.$update(function () {
                $state.go('tenant.grid');
            });
        } else {
            $scope.tenant.$save(function () {
                $state.go('tenant.grid');
            });
        }
    }
});