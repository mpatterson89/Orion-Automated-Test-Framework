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
    var ChartDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChartDirective = (function () {
                function ChartDirective(el, renderer) {
                    //el.nativeElement.style.backgroundColor = 'yellow';
                    var data = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My First dataset",
                                fillColor: "rgba(220,220,220,0.5)",
                                strokeColor: "rgba(220,220,220,0.8)",
                                highlightFill: "rgba(220,220,220,0.75)",
                                highlightStroke: "rgba(220,220,220,1)",
                                data: [65, 59, 80, 81, 56, 55, 40]
                            },
                            {
                                label: "My Second dataset",
                                fillColor: "rgba(151,187,205,0.5)",
                                strokeColor: "rgba(151,187,205,0.8)",
                                highlightFill: "rgba(151,187,205,0.75)",
                                highlightStroke: "rgba(151,187,205,1)",
                                data: [28, 48, 40, 19, 86, 27, 90]
                            }
                        ]
                    };
                    var options = {
                        scaleBeginAtZero: true, scaleShowGridLines: true,
                        scaleGridLineColor: "rgba(0,0,0,.05)",
                        scaleGridLineWidth: 1,
                        scaleShowHorizontalLines: true,
                        scaleShowVerticalLines: true,
                        barShowStroke: true,
                        barStrokeWidth: 2,
                        barValueSpacing: 5,
                        barDatasetSpacing: 1,
                    };
                    var canvas = document.getElementById("mycanvas");
                    var ctx = canvas.getContext("2d");
                    var BarChart = new Chart(ctx);
                    console.log(BarChart);
                    BarChart.Bar(data, options);
                }
                ChartDirective = __decorate([
                    core_1.Directive({
                        selector: '[chart]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ChartDirective);
                return ChartDirective;
            }());
            exports_1("ChartDirective", ChartDirective);
        }
    }
});
//# sourceMappingURL=chart-directive.js.map