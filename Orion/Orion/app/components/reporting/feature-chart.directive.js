/**
 * Created by ehnsgz5 on 4/26/2016.
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
    var FeatureChartDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FeatureChartDirective = (function () {
                function FeatureChartDirective() {
                }
                FeatureChartDirective.prototype.ngOnInit = function () {
                    var data = {
                        labels: ["Web Transport Assign", "Web Transport Update", "Web Transport Create", "Task Sorter",
                            "Notifications Transport Assigned", "Notifications Transport Canceled", "Notifications Transport Delayed"],
                        datasets: [
                            {
                                label: "Failures",
                                fill: true,
                                lineTension: 0.1,
                                backgroundColor: "#ff0000",
                                borderColor: "#ff3333",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 1,
                                data: [0, 1, 0, 9, 1, 0, 0],
                            },
                            {
                                label: "Successes",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "#009933",
                                borderColor: "#00cc00",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "#1aff1a",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 1,
                                data: [79, 4, 26, 72, 15, 22, 28],
                            }
                        ]
                    };
                    var options = {};
                    var canvas = document.getElementById("feature-chart");
                    console.log(canvas);
                    if (canvas) {
                        // var ctx = canvas.getContext('2d');
                        Chart.defaults.global.legend.display = false;
                        var ctx = document.getElementById("feature-chart");
                        var mylineChart = new Chart(ctx, {
                            type: 'line',
                            data: data,
                            options: options
                        });
                    }
                };
                FeatureChartDirective = __decorate([
                    core_1.Directive({
                        selector: '[chart]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FeatureChartDirective);
                return FeatureChartDirective;
            }());
            exports_1("FeatureChartDirective", FeatureChartDirective);
        }
    }
});
//# sourceMappingURL=feature-chart.directive.js.map