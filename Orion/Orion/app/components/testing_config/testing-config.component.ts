/**
 * Created by ehnsgz5 on 5/3/2016.
 */

import {Component, Output, EventEmitter, Input}  from 'angular2/core'
import {Http, ResponseOptionsArgs, Headers, Response, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {AvailableTestsComponent} from "./available-test.component";
import {ConfigureTestBatchComponent} from "./configure-testbatch.component";
import { AvailableTestsServices } from './services/available-tests.service';
import { ConfigureTestBatchService } from './services/configure-testbatch.service';

//declare var require: any;
//let json_x = require('../../../orion_config.json');



@Component({
    selector: 'testing-config',
    templateUrl:'app/components/testing_config/testing-config.component.html',
    styles: [`
        
    `],
    directives:[AvailableTestsComponent, ConfigureTestBatchComponent]
})

export class TestingConfigComponent{

    //@Output() sendTest = new EventEmitter<any>();
    //@Input() sendTest: String;
    sendTest: String;

    constructor(private _http: Http){

    }

    sendTestToQueue(event){
        console.log("Testing-config emitting test -> configure-testbatch");
        this.sendTest = event;
    }

















    onTestRun($event){

        
        //console.log(json_x);
        var server = '10.100.65.160';//'10.100.65.193';//'10.100.65.160';
        var sub_node = 'uft2.awarix.com';
        var main_node = '10.100.65.193';//'10.40.215.154';
        var sub_node_port = '6437';
        var main_node_port = '1337';
        var url_1 = 'http://'+sub_node+':'+sub_node_port+'/run_tests';
        var url_2 = 'http://'+main_node+':'+main_node_port+'/new_test_batch';
        //var tests = {'tests':['tasksorter.bat','transport_tab_verification.bat','transport_notifications.bat']};
        var tests = {
            time: 'some time',
            sub_node: 'uft2.awarix.com',
            qa_server: 'centos-qa8.test.awarix.com',
            tests : [
                {
                    test_name: 'Transport Tab Verification',
                    test_file: 'transport_tab_verification.bat',
                    test_number: 1,
                    hasRun: false
                }
                // ,
                // {
                //     test_name: 'TaskSorter',
                //     test_file: 'tasksorterr.bat',
                //     test_number: 2,
                //     hasRun: false
                // }
            ]
        };
        // this._http.get(url_1)
        //     .map(res => res.json())
        //     .subscribe(res => {
        //         console.log(res);
        //
        //     });//{'tests':['transport_tab_verification.bat']}
        console.log(url_1);
        var data = JSON.stringify(tests);
        var params = 'json='+data;
        var headers = new Headers();  
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Content-Type','application/json');
        var options = new RequestOptions({ headers: headers });
        //var options = new ResponseOptionsArgs();
        //options.headers = headers;
        console.log(data);
        this._http.post(url_2, data, options)
            //.map((res: Response) => res.json())
            .subscribe(res => {
                console.log('subscribe');
                console.log(res);

            });
    }
}