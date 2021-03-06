"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var GasService = (function () {
    function GasService() {
    }
    return GasService;
})();
var Dashboard = (function () {
    function Dashboard(gasService) {
        this.gasService = gasService;
    }
    Dashboard = __decorate([
        __param(0, core_1.Inject(GasService)), 
        __metadata('design:paramtypes', [Object])
    ], Dashboard);
    return Dashboard;
})();
testing_1.describe("Injector", function () {
    testing_1.it("should be able to resolve and inject dependencies without typed signature (ES6 syntax with @Inject))", function () {
        var injector = core_1.Injector.resolveAndCreate([
            Dashboard,
            GasService]);
        var dashboard = injector.get(Dashboard);
        testing_1.expect(dashboard instanceof Dashboard).toBe(true);
        testing_1.expect(dashboard.gasService instanceof GasService).toBe(true);
    });
});
//# sourceMappingURL=Injector_es6_test.js.map