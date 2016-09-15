/**
 * Created by Michael on 4/24/2016.
 */
System.register(['angular2/core', 'angular2/common', './donut-chart.directive', './report.component', './features.component', './feature-chart.directive', "angular2/http", 'rxjs/add/observable/from', 'rxjs/add/operator/map', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, common_1, donut_chart_directive_1, report_component_1, features_component_1, feature_chart_directive_1, http_1, router_1;
    var ReportingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (donut_chart_directive_1_1) {
                donut_chart_directive_1 = donut_chart_directive_1_1;
            },
            function (report_component_1_1) {
                report_component_1 = report_component_1_1;
            },
            function (features_component_1_1) {
                features_component_1 = features_component_1_1;
            },
            function (feature_chart_directive_1_1) {
                feature_chart_directive_1 = feature_chart_directive_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ReportingComponent = (function () {
                function ReportingComponent(_http, router) {
                    var _this = this;
                    this._http = _http;
                    this.router = router;
                    this.showReport = false;
                    this.havetestbatch = false;
                    this.router.navigate(['Reporting', { test_batch_id: this.test_batch_id }]);
                    console.log(this.test_batch_id);
                    //let id = +this.router.snapshot.params['id'];
                    //this.isInit = true;
                    var config;
                    this._http.get('../../../../../orion_config.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        config = res;
                        console.log(res);
                        //var main_node =  res.main_node.host;//'10.40.215.150';//'10.100.65.193';//'10.100.65.160';
                        var url_1 = 'http://' + config.main_node.host + ':' + config.main_node.port +
                            '/reporting/last_test_batch_id';
                        _http.get(url_1)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (res) {
                            _this.lastTestBatch = res[0];
                            console.log(res);
                            var url = 'http://' + config.main_node.host + ':' + config.main_node.port +
                                '/reporting/last_test_batch/' + _this.lastTestBatch.batch_id;
                            _http.get(url)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (res) {
                                _this.testBatch = res;
                                _this.havetestbatch = true;
                            });
                        });
                    });
                    ///  Auto Refresh Experimenting ///
                    // ReportingService.runLastTestBatchFetcher(this._http);
                    // //console.log(this.lastTestBatchOBS);
                    // Observable.interval(2000).subscribe(r => {
                    //     var oldBatch = this.lastTestBatch;
                    //     this.lastTestBatch = ReportingService.getLastBatchID();
                    //     if(this.lastTestBatch && oldBatch){
                    //         this.testBatch = ReportingService.getLastBatch();
                    //         console.log(this.lastTestBatch.testbatchid);
                    //         if(this.lastTestBatch.id != oldBatch.id){
                    //             console.log(JSON.stringify(this.lastTestBatch));
                    //             //this.isInit = false;
                    //             this.createCharts();
                    //         }
                    //     }
                    // });
                }
                //x = 20;
                ReportingComponent.prototype.createCharts = function () {
                    console.log('updating charts');
                    //DonutChartDirective.createCharts(this.testBatch);
                };
                ReportingComponent.prototype.onClick = function ($event) {
                    console.log($event);
                    this.showReport = !this.showReport;
                };
                ReportingComponent.prototype.ngOnInit = function () {
                };
                ReportingComponent.prototype.onFeatureChange = function ($event) {
                    console.log($event.selectedFeature);
                    this.selectedFeature = $event.selectedFeature;
                };
                ReportingComponent.prototype.showReportEvent = function ($event, i) {
                    this.reportBatch = this.testBatch[i];
                    this.showReport = !this.showReport;
                    // if(this.batchIndex == undefined) {
                    //     this.batchIndex = i;
                    //     this.showReport = !this.showReport;
                    //     this.reportBatch = this.testBatch[i];
                    //     console.log('op 1');
                    // } else if(this.batchIndex == i){
                    //     this.showReport = !this.showReport;
                    //     console.log('op 2');
                    // } else if(this.batchIndex != i){
                    //     if(!this.showReport)
                    //         this.showReport = !this.showReport;
                    //     this.reportBatch = this.testBatch[i];
                    //
                    //     console.log('op 3');
                    // }
                    // console.log('report pressed: ',i);
                };
                ReportingComponent = __decorate([
                    core_1.Component({
                        selector: 'reporting',
                        templateUrl: 'app/components/reporting/reporting.component.html',
                        directives: [donut_chart_directive_1.DonutChartDirective, report_component_1.ReportComponent, features_component_1.FeaturesComponent, feature_chart_directive_1.FeatureChartDirective,
                            common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        styles: ["\n        \n    "]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], ReportingComponent);
                return ReportingComponent;
            }());
            exports_1("ReportingComponent", ReportingComponent);
        }
    }
});
//# sourceMappingURL=reporting.component.js.map