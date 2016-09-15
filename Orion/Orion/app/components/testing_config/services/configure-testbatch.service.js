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
    var ConfigureTestBatchService;
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
            ConfigureTestBatchService = (function () {
                function ConfigureTestBatchService(_http) {
                    this._http = _http;
                }
                ConfigureTestBatchService.prototype.get_config = function () {
                    return this._http.get('../orion_config.json')
                        .map(function (res) { return res.json(); });
                };
                ConfigureTestBatchService.prototype.get_data = function (url_1) {
                    return this._http.get(url_1)
                        .map(function (res) { return res.json(); });
                };
                ConfigureTestBatchService.prototype.get_dropdown_values = function () {
                    return this.get_config();
                };
                ConfigureTestBatchService.prototype.sendTestBatch = function (url, test_batch) {
                    console.log('Submitting test batch');
                    console.log(url);
                    var data = JSON.stringify(test_batch);
                    var params = 'json=' + data;
                    var headers = new http_1.Headers();
                    headers.append('Access-Control-Allow-Origin', '*');
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    this._http.post(url, data, options).subscribe(function (res) {
                        console.log('subscribe');
                        console.log(res);
                    });
                    //console.log(json_x);
                    //var server = '10.100.65.160';//'10.100.65.193';//'10.100.65.160';
                    //var sub_node = 'uft2.awarix.com';
                    //var main_node = '10.100.65.193';//'10.40.215.154';
                    //var sub_node_port = '6437';
                    //var main_node_port = '1337';
                    //var url_1 = 'http://'+sub_node+':'+sub_node_port+'/run_tests';
                    //var url_2 = 'http://'+main_node+':'+main_node_port+'/new_test_batch';
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
                    /*console.log(url_1);
                    var data = JSON.stringify(tests);
                    var params = 'json='+data;
                    var headers = new Headers();
                    headers.append('Access-Control-Allow-Origin','*');
                    headers.append('Content-Type','application/json');
                    var options = new RequestOptions({ headers: headers });
                    //var options = new ResponseOptionsArgs();
                    //options.headers = headers;
                    console.log(data);
                    this._http.post(url_2, data, options)
                    //.map((res: Response) => res.json())
                        .subscribe(res => {
                            console.log('subscribe');
                            console.log(res);
            
                        });*/
                };
                ConfigureTestBatchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ConfigureTestBatchService);
                return ConfigureTestBatchService;
            }());
            exports_1("ConfigureTestBatchService", ConfigureTestBatchService);
        }
    }
});
//# sourceMappingURL=configure-testbatch.service.js.map