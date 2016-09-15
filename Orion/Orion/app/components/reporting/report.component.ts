/**
 * Created by Michael on 4/25/2016.
 */

import {Component, Input, OnInit} from 'angular2/core';

@Component({
    selector: 'report',
    template: `
        <h1 align="center" style="align-content: center"><span style="color: #00A000">{{myTestBatch.feature}} Report</span></h1>
        <div *ngFor="#groups of myTestBatch.groups, #i=index">
            <div align="center" class="panel panel-default">
            <div class="panel-heading"><i 
                 class="glyphicon glyphicon-menu-down" 
                 style="float: left"> {{groups.name}}</i><br>
                 </div>
                <div class="panel-body">
                    <div >
                        <table class="table" style="border-radius: 50%">
                            <thead class="table table-header-group">
                                <tr >
                                    <!--<th  *ngFor="#key of testcase_keys">{{key}}</th>-->
                                    <th>Test ID</th>
                                    <th>Expected</th>
                                    <th>Actual</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr class="{{testcase.passed}}" *ngFor="#testcase of groups.testcases, #x=index">
                                    <td>{{testcase.test_id}}</td>
                                    <td>{{testcase.expected}}</td>
                                    <td>{{testcase.actual}}</td>
                                    <td>{{testcase.description}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    `
})

export class ReportComponent implements OnInit{

    @Input() testBatch: any;
    myTestBatch: any;
    testcase_keys: any;

    constructor(){
    }

    ngOnInit(){
        this.myTestBatch = this.testBatch;
        this.testcase_keys = Object.keys(this.myTestBatch.groups[0].testcases[0]);
        console.log(this.myTestBatch);
        console.log(this.testBatch);
    }
}