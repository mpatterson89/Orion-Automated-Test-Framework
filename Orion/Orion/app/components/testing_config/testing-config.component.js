/**
 * Created by ehnsgz5 on 5/3/2016.
 */
System.register(['angular2/core', "angular2/http", 'rxjs/add/operator/map', "./available-test.component", "./configure-testbatch.component"], function(exports_1, context_1) {
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
    var core_1, http_1, available_test_component_1, configure_testbatch_component_1;
    var TestingConfigComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (available_test_component_1_1) {
                available_test_component_1 = available_test_component_1_1;
            },
            function (configure_testbatch_component_1_1) {
                configure_testbatch_component_1 = configure_testbatch_component_1_1;
            }],
        execute: function() {
            //declare var require: any;
            //let json_x = require('../../../orion_config.json');
            TestingConfigComponent = (function () {
                function TestingConfigComponent(_http) {
                    this._http = _http;
                }
                TestingConfigComponent.prototype.sendTestToQueue = function (event) {
                    console.log("Testing-config emitting test -> configure-testbatch");
                    this.sendTest = event;
                };
                TestingConfigComponent.prototype.onTestRun = function ($event) {
                    //console.log(json_x);
                    var server = '10.100.65.160'; //'10.100.65.193';//'10.100.65.160';
                    var sub_node = 'uft2.awarix.com';
                    var main_node = '10.100.65.193'; //'10.40.215.154';
                    var sub_node_port = '6437';
                    var main_node_port = '1337';
                    var url_1 = 'http://' + sub_node + ':' + sub_node_port + '/run_tests';
                    var url_2 = 'http://' + main_node + ':' + main_node_port + '/new_test_batch';
                    //var tests = {'tests':['tasksorter.bat','transport_tab_verification.bat','transport_notifications.bat']};
                    var tests = {
                        time: 'some time',
                        sub_node: 'uft2.awarix.com',
                        qa_server: 'centos-qa8.test.awarix.com',
                        tests: [
                            {
                                test_name: 'Transport Tab Verification',
                                test_file: 'transport_tab_verification.bat',
                                test_number: 1,
                                hasRun: false
                            }
                        ]
                    };
                    // this._http.get(url_1)
                    //     .map(res => res.json())
                    //     .subscribe(res => {
                    //         console.log(res);
                    //
                    //     });//{'tests':['transport_tab_verification.bat']}
                    console.log(url_1);
                    var data = JSON.stringify(tests);
                    var params = 'json=' + data;
                    var headers = new http_1.Headers();
                    headers.append('Access-Control-Allow-Origin', '*');
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    //var options = new ResponseOptionsArgs();
                    //options.headers = headers;
                    console.log(data);
                    this._http.post(url_2, data, options)
                        .subscribe(function (res) {
                        console.log('subscribe');
                        console.log(res);
                    });
                };
                TestingConfigComponent = __decorate([
                    core_1.Component({
                        selector: 'testing-config',
                        templateUrl: 'app/components/testing_config/testing-config.component.html',
                        styles: ["\n        \n    "],
                        directives: [available_test_component_1.AvailableTestsComponent, configure_testbatch_component_1.ConfigureTestBatchComponent]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TestingConfigComponent);
                return TestingConfigComponent;
            }());
            exports_1("TestingConfigComponent", TestingConfigComponent);
        }
    }
});
//# sourceMappingURL=testing-config.component.js.map