System.register(['rxjs/Observable', 'rxjs/add/observable/from', 'rxjs/add/observable/interval', 'rxjs/add/operator/map', "angular2/core"], function(exports_1, context_1) {
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
    var Observable_1, core_1;
    var ReportingService;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReportingService = (function () {
                function ReportingService() {
                }
                ReportingService.runLastTestBatchFetcher = function (http) {
                    var _this = this;
                    this.testBatchIDisSubscribed = false;
                    this.testBatchisSubscribed = false;
                    this.getBatchIdOBS = http.get('http://10.100.65.193:1337/reporting/last_test_batch_id')
                        .map(function (res) { return res.json(); });
                    this.BatchIDFetcher = Observable_1.Observable.interval(6000).subscribe(function (results) {
                        if (!_this.testBatchIDisSubscribed) {
                            _this.getBatchIdOBS
                                .subscribe(function (results) {
                                console.log(results);
                                _this.lastBatchID = results;
                            });
                        }
                        _this.testBatchIDisSubscribed = true;
                        if (_this.lastBatchID && !_this.testBatchisSubscribed) {
                            _this.BatchFetcher = Observable_1.Observable.interval(6000).subscribe(function (results) {
                                var url = 'http://10.100.65.193:1337/reporting/last_test_batch/' + _this.lastBatchID[0].batch_id;
                                http.get(url)
                                    .map(function (res) { return res.json(); })
                                    .subscribe(function (results) {
                                    console.log(results);
                                    _this.lastBatch = results;
                                });
                                _this.testBatchisSubscribed = true;
                            });
                        }
                    });
                };
                ReportingService.getLastBatchID = function () {
                    if (this.lastBatchID)
                        return this.lastBatchID[0];
                };
                ReportingService.getLastBatch = function () {
                    if (this.lastBatch)
                        return this.lastBatch;
                };
                ReportingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ReportingService);
                return ReportingService;
            }());
            exports_1("ReportingService", ReportingService);
        }
    }
});
//# sourceMappingURL=reporting.services.js.map