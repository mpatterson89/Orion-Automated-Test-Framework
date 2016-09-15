/**
 * Created by Michael on 4/20/2016.
 */
System.register(['angular2/core', './components/navbar/navbar.component', 'angular2/router', "./components/home/home.component", "./components/reporting/reporting.component", './components/testing_config/testing-config.component'], function(exports_1, context_1) {
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
    var core_1, navbar_component_1, router_1, home_component_1, reporting_component_1, testing_config_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (reporting_component_1_1) {
                reporting_component_1 = reporting_component_1_1;
            },
            function (testing_config_component_1_1) {
                testing_config_component_1 = testing_config_component_1_1;
            }],
        execute: function() {
            // ES6
            //import Chart from './bower_components/Chart.js/src/chart.js';
            // declare var require: any;
            //
            // require(['../bower_components/Chart.js/src/chart.js'], function(Chart){
            //     // Use Chart.js as normal here.
            //
            //     // Chart.noConflict restores the Chart global variable to it's previous owner
            //     // The function returns what was previously Chart, allowing you to reassign.
            //     var Chartjs = Chart.noConflict();
            //
            // });
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/reporting', name: 'Reporting', component: reporting_component_1.ReportingComponent },
                        { path: '/testing_config', name: 'TestingConfig', component: testing_config_component_1.TestingConfigComponent, useAsDefault: true },
                        //Testing Config
                        //Server Status
                        //Generate Test Data
                        { path: '/*other', name: 'Other', redirectTo: ['Reporting'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <navbar></navbar>\n        <router-outlet></router-outlet>\n        ",
                        directives: [navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map