System.register(["angular2/http", 'rxjs/add/observable/from', 'rxjs/add/operator/map', "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var AvailableTestsServices;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AvailableTestsServices = (function () {
                function AvailableTestsServices(_http) {
                    this._http = _http;
                }
                AvailableTestsServices.prototype.get_config = function () {
                    return this._http.get('../orion_config.json')
                        .map(function (res) { return res.json(); });
                };
                AvailableTestsServices.prototype.get_data = function (url_1) {
                    return this._http.get(url_1)
                        .map(function (res) { return res.json(); });
                };
                AvailableTestsServices.prototype.get_available_tests_list = function () {
                    return this.get_config();
                };
                AvailableTestsServices = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AvailableTestsServices);
                return AvailableTestsServices;
            }());
            exports_1("AvailableTestsServices", AvailableTestsServices);
        }
    }
});
//# sourceMappingURL=available-tests.service.js.map