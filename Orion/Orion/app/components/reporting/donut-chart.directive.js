/**
 * Created by Michael on 4/24/2016.
 */
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var DonutChartDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DonutChartDirective = (function () {
                function DonutChartDirective() {
                    //console.log('Doughnut Constructor: ', this.testBatch);
                }
                DonutChartDirective.prototype.ngAfterContentInit = function () {
                };
                DonutChartDirective.prototype.ngAfterViewInit = function () {
                    //console.log('Doughnut AfterViewInit: ', this.testBatch);
                    this.testBatch.forEach(function (item) {
                        var green = "#00A000";
                        var blue = "#227cf3";
                        var red = "#B80D1E";
                        var ctx = document.getElementById(item.feature);
                        var data2 = {
                            labels: [
                                "Passed",
                                "Failed",
                            ],
                            datasets: [
                                {
                                    data: [item.passed, item.failed],
                                    backgroundColor: [
                                        green,
                                        red,
                                    ],
                                    hoverBackgroundColor: [
                                        green,
                                        red,
                                    ]
                                }]
                        };
                        var data = [
                            {
                                value: item.passed,
                                color: green,
                                highlight: green,
                                label: "Passed"
                            },
                            {
                                value: item.failed,
                                color: red,
                                highlight: red,
                                label: "Failed"
                            }
                        ];
                        var options = {
                            cutoutPercentage: 55,
                            animation: {
                                duration: 4500
                            }
                        };
                        if (ctx) {
                            var myDoughnutChart = new Chart(ctx, {
                                type: 'doughnut',
                                data: data2,
                                options: options
                            });
                        }
                    });
                };
                DonutChartDirective.prototype.ngOnInit = function () {
                    //console.log('Doughnut OnInit: ', this.testBatch);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DonutChartDirective.prototype, "testBatch", void 0);
                DonutChartDirective = __decorate([
                    core_1.Directive({
                        selector: '[last-batch-chart]',
                    }), 
                    __metadata('design:paramtypes', [])
                ], DonutChartDirective);
                return DonutChartDirective;
            }());
            exports_1("DonutChartDirective", DonutChartDirective);
        }
    }
});
//# sourceMappingURL=donut-chart.directive.js.map