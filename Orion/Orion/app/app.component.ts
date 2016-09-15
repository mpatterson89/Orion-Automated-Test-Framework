/**
 * Created by Michael on 4/20/2016.
 */


import {Component} from 'angular2/core'
import {NavBarComponent} from './components/navbar/navbar.component';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HomeComponent} from "./components/home/home.component";
import {ReportingComponent} from "./components/reporting/reporting.component";
import {TestingConfigComponent} from './components/testing_config/testing-config.component';

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



@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent },
    {path: '/reporting', name: 'Reporting', component: ReportingComponent },
    {path: '/testing_config', name: 'TestingConfig', component: TestingConfigComponent, useAsDefault: true },
    //Testing Config
    //Server Status
    //Generate Test Data
    {path: '/*other', name: 'Other', redirectTo: ['Reporting']}
])

@Component({
    selector:'my-app',
    template:`
        <navbar></navbar>
        <router-outlet></router-outlet>
        `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent{

    constructor(){
    }

    
}




