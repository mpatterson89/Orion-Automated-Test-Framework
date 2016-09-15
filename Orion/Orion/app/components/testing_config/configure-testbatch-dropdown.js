/**
 * Created by mpatterson on 8/16/16.
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
    var ConfigureTestBatchDropdownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfigureTestBatchDropdownComponent = (function () {
                function ConfigureTestBatchDropdownComponent() {
                    this.dropdown_values = [];
                    this.sendSelected = new core_1.EventEmitter();
                }
                Object.defineProperty(ConfigureTestBatchDropdownComponent.prototype, "setValues", {
                    set: function (values) {
                        if (values != undefined) {
                            console.log(values[0].values);
                            this.dropdown_values = values[0].values;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ConfigureTestBatchDropdownComponent.prototype.valueSelected = function (value, event) {
                    console.log(event);
                    if (value.indexOf("--") >= 0)
                        value = undefined;
                    console.log(value);
                    this.sendSelected.emit({ "dropdown_value": value });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], ConfigureTestBatchDropdownComponent.prototype, "setValues", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ConfigureTestBatchDropdownComponent.prototype, "sendSelected", void 0);
                ConfigureTestBatchDropdownComponent = __decorate([
                    core_1.Component({
                        selector: 'configure-testbatch-dropdown',
                        template: "\n            <div class=\"container\">\n\n                <div class=\"dropdown \"  style=\"width: 25%\" data-toggle=\"dropdown\">\n                    <select  name=\"colour\" class=\"form-control btn-success\" (change)=\"valueSelected($event.target.value, $event)\">\n                        <option *ngFor=\"let value of dropdown_values\">{{value}}</option>\n                    </select>\n                </div>\n            </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfigureTestBatchDropdownComponent);
                return ConfigureTestBatchDropdownComponent;
            }());
            exports_1("ConfigureTestBatchDropdownComponent", ConfigureTestBatchDropdownComponent);
        }
    }
});
//# sourceMappingURL=configure-testbatch-dropdown.js.map