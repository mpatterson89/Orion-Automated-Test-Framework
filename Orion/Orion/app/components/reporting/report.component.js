/**
 * Created by Michael on 4/25/2016.
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
    var ReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReportComponent = (function () {
                function ReportComponent() {
                }
                ReportComponent.prototype.ngOnInit = function () {
                    this.myTestBatch = this.testBatch;
                    this.testcase_keys = Object.keys(this.myTestBatch.groups[0].testcases[0]);
                    console.log(this.myTestBatch);
                    console.log(this.testBatch);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ReportComponent.prototype, "testBatch", void 0);
                ReportComponent = __decorate([
                    core_1.Component({
                        selector: 'report',
                        template: "\n        <h1 align=\"center\" style=\"align-content: center\"><span style=\"color: #00A000\">{{myTestBatch.feature}} Report</span></h1>\n        <div *ngFor=\"#groups of myTestBatch.groups, #i=index\">\n            <div align=\"center\" class=\"panel panel-default\">\n            <div class=\"panel-heading\"><i \n                 class=\"glyphicon glyphicon-menu-down\" \n                 style=\"float: left\"> {{groups.name}}</i><br>\n                 </div>\n                <div class=\"panel-body\">\n                    <div >\n                        <table class=\"table\" style=\"border-radius: 50%\">\n                            <thead class=\"table table-header-group\">\n                                <tr >\n                                    <!--<th  *ngFor=\"#key of testcase_keys\">{{key}}</th>-->\n                                    <th>Test ID</th>\n                                    <th>Expected</th>\n                                    <th>Actual</th>\n                                    <th>Description</th>\n                                </tr>\n                            </thead>\n                            <tbody >\n                                <tr class=\"{{testcase.passed}}\" *ngFor=\"#testcase of groups.testcases, #x=index\">\n                                    <td>{{testcase.test_id}}</td>\n                                    <td>{{testcase.expected}}</td>\n                                    <td>{{testcase.actual}}</td>\n                                    <td>{{testcase.description}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportComponent);
                return ReportComponent;
            }());
            exports_1("ReportComponent", ReportComponent);
        }
    }
});
//# sourceMappingURL=report.component.js.map