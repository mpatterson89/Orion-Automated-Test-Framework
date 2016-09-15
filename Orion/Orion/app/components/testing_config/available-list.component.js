/**
 * Created by mpatterson on 8/12/16.
 */
System.register(["angular2/core"], function(exports_1, context_1) {
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
    var AvailableList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AvailableList = (function () {
                function AvailableList() {
                    this.sendTest = new core_1.EventEmitter();
                }
                AvailableList.prototype.doThis = function () {
                    console.log("BLAH");
                    this.available_list.push({ "test_name": "BLAH", "test_file": "something.bat" });
                };
                AvailableList.prototype.sendTestToQueue = function (test_name, test_file, requires_java_client) {
                    console.log("Available-list emitting test -> Available-test");
                    console.log(this.sendTest);
                    this.sendTest.emit({ "test_name": test_name, "test_file": test_file, "requires_java_client": requires_java_client });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], AvailableList.prototype, "available_list", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AvailableList.prototype, "sendTest", void 0);
                AvailableList = __decorate([
                    core_1.Component({
                        selector: "available-list",
                        template: "\n    <div class=\"list-group\" >\n        <button *ngFor=\"let test of available_list\"  [value]=\"test.test_name\" type=\"button\" class=\"list-group-item\" (click)=\"sendTestToQueue(test.test_name, test.test_file, test.requires_java_client)\" >\n            <div class=\"showhim\">\n                {{test.test_name}}\n                <div class=\"showme\">\n                    <i class=\"glyphicon glyphicon-arrow-right \"></i>\n                </div>\n\n            </div>\n        </button>\n        \n    </div>\n    \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AvailableList);
                return AvailableList;
            }());
            exports_1("AvailableList", AvailableList);
        }
    }
});
//# sourceMappingURL=available-list.component.js.map