/**
 * Created by Michael on 4/24/2016.
 */

import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {DonutChartDirective} from './donut-chart.directive';
import {ReportComponent} from './report.component';
import {FeaturesComponent} from './features.component';
import {FeatureChartDirective} from './feature-chart.directive';
import {ReportingService} from "./services/reporting.services";
//import {Http} from "angular2";
import {Http, HTTP_PROVIDERS, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import {Router} from "angular2/router";

@Component({
    selector: 'reporting',
    templateUrl: 'app/components/reporting/reporting.component.html',
    directives: [DonutChartDirective, ReportComponent,FeaturesComponent, FeatureChartDirective,
                 NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
    styles: [`
        
    `]
})

export class ReportingComponent implements OnInit{
    isInit: boolean;
    showReport: boolean = false;
    selectedFeature: string;
    havetestbatch = false;
    batchIndex: any;
    reportBatch: any;
    lastTestBatch: {
        version: string,
        time: Date,
        batch_id: string,
        env: string
    };

    test_batch_id: String;

    testBatch: [{
        batch_id: String,
        passed: Number,
        failed: Number,
        feature: String,
        groups: [{
            name: String,
            testcases: [{
                test_id: String,
                expected: String,
                actual: String,
                passed: Boolean
            }]

        }]
    }];
    //x = 20;



    createCharts(){

        console.log('updating charts');
        //DonutChartDirective.createCharts(this.testBatch);
        

    }
    

    constructor(private _http: Http, private router: Router){
        this.router.navigate(['Reporting',{test_batch_id : this.test_batch_id}]);
        console.log(this.test_batch_id);
        //let id = +this.router.snapshot.params['id'];

        //this.isInit = true;
        var config: any;
        this._http.get('../../../../../orion_config.json')
            .map((res:Response)=> res.json())
            .subscribe(res => {
                    config = res;
                    console.log(res);
                    //var main_node =  res.main_node.host;//'10.40.215.150';//'10.100.65.193';//'10.100.65.160';
                    var url_1 = 'http://'+config.main_node.host+':'+config.main_node.port+
                                '/reporting/last_test_batch_id';
                    _http.get(url_1)
                        .map(res => res.json())
                        .subscribe(res => {this.lastTestBatch = res[0];
                            console.log(res);
                            var url = 'http://'+config.main_node.host+':'+config.main_node.port+
                                      '/reporting/last_test_batch/'+this.lastTestBatch.batch_id;
                            _http.get(url)
                                .map(res => res.json())
                                .subscribe(res => {
                                    this.testBatch = res;
                                    this.havetestbatch = true;
                                });
                        });

                }
            );



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

    onClick($event){
        console.log($event);
        this.showReport=!this.showReport;
        
    }
    ngOnInit(){


    }
    onFeatureChange($event){
        console.log($event.selectedFeature);
        this.selectedFeature = $event.selectedFeature
    }
    
    showReportEvent($event, i){
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
    }


}