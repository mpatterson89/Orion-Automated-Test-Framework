/**
 * Created by ehnsgz5 on 4/26/2016.
 */
System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var FeaturesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FeaturesComponent = (function () {
                function FeaturesComponent() {
                    this.features_list = [];
                    this.change = new core_1.EventEmitter();
                }
                FeaturesComponent.prototype.setSelected = function ($event, i) {
                    this.selectedFeature = this.features_list[i];
                    this.change.emit({ selectedFeature: this.selectedFeature });
                    console.log(this.selectedFeature);
                };
                FeaturesComponent.prototype.ngOnInit = function () {
                    console.log(this.testBatch);
                    for (var i = 0; i < this.testBatch.length; i++) {
                        this.features_list.push(this.testBatch[i].feature);
                    }
                    // this.features_list = [
                    //     'Task Sorter',
                    //     'Web Work Assignment'
                    // ]
                    console.log('Feature List: ', this.features_list);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeaturesComponent.prototype, "testBatch", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FeaturesComponent.prototype, "change", void 0);
                FeaturesComponent = __decorate([
                    core_1.Component({
                        selector: 'features',
                        template: "\n    <div align=\"center\" style=\"width: 100%; margin-left: 1em\">\n        <h3><span style=\"color: #00A000\">Features Automated</span></h3>\n        <div class=\"list-group\" style=\"margin-top: 10%\">\n            <div *ngFor=\"#feature of features_list, #i = index\">\n                <a type=\"button\" (click)=\"setSelected($event, i)\"  [routerLink]=\"['Reporting']\" class=\"list-group-item btn-read-report\">\n                    {{feature}}\n                </a>\n            </div>\n        </div>\n    </div>\n    ",
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FeaturesComponent);
                return FeaturesComponent;
            }());
            exports_1("FeaturesComponent", FeaturesComponent);
        }
    }
});
//# sourceMappingURL=features.component.js.map