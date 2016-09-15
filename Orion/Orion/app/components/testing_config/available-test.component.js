/**
 * Created by mpatterson on 8/11/16.
 */
System.register(["angular2/core", "./services/available-tests.service", "./available-list.component"], function(exports_1, context_1) {
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
    var core_1, available_tests_service_1, available_list_component_1;
    var AvailableTestsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (available_tests_service_1_1) {
                available_tests_service_1 = available_tests_service_1_1;
            },
            function (available_list_component_1_1) {
                available_list_component_1 = available_list_component_1_1;
            }],
        execute: function() {
            AvailableTestsComponent = (function () {
                function AvailableTestsComponent(_available_tests, _zone) {
                    this._available_tests = _available_tests;
                    this._zone = _zone;
                    this.sendTest = new core_1.EventEmitter();
                }
                AvailableTestsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._available_tests.get_available_tests_list().subscribe(function (res) {
                        _this.getData(res);
                    });
                };
                AvailableTestsComponent.prototype.getData = function (res) {
                    var _this = this;
                    this.config = res;
                    console.log(res);
                    var url_1 = 'http://' + this.config.main_node.host + ':' + this.config.main_node.port + this.config.data_urls.available_tests;
                    this._available_tests.get_data(url_1)
                        .subscribe(function (res) {
                        _this.available_tests = res;
                    });
                };
                AvailableTestsComponent.prototype.sendTestToQueue = function (event) {
                    console.log("Available-test emitting test -> testing-config");
                    console.log(event);
                    this.sendTest.emit(event);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AvailableTestsComponent.prototype, "sendTest", void 0);
                AvailableTestsComponent = __decorate([
                    core_1.Component({
                        selector: "available-test",
                        template: "<available-list [available_list]=\"available_tests\" (sendTest)=\"sendTestToQueue($event)\" ></available-list>",
                        providers: [available_tests_service_1.AvailableTestsServices],
                        directives: [available_list_component_1.AvailableList]
                    }), 
                    __metadata('design:paramtypes', [available_tests_service_1.AvailableTestsServices, core_1.NgZone])
                ], AvailableTestsComponent);
                return AvailableTestsComponent;
            }());
            exports_1("AvailableTestsComponent", AvailableTestsComponent);
        }
    }
});
//# sourceMappingURL=available-test.component.js.map