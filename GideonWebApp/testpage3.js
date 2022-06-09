(function () {
    'use strict';

    angular.module('appAdmin.directives').directive('hlViewEditTaxConfig', HlViewEditTaxConfig);

    function HlViewEditTaxConfig() {
        return {
            restrict: 'E',
            templateUrl: 'script/viewEditTaxConfig/viewEditTaxConfig.html',
            controller: ['$state', '_', '$stateParams', 'viewEditTaxConfigService',
                function ($state, _, $stateParams, viewEditTaxConfigService) {
                    this.clearData = _.bind(function (sourceObj) {
                        for (var key in sourceObj) {
                            if (key === 'submittedToIRSPriorYear' || key === "w9SStudentAccessURL") {
                                continue;
                            }
                            sourceObj[key] = null;
                        }
                    }, this)

                }
            ],
            bindToController: true,
            controllerAs: 'x'
        };
    }
})();