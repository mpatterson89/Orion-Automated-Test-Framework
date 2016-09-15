/**
 * Created by ehnsgz5 on 5/2/2016.
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Http} from 'angular2/http';
import {Injectable} from "angular2/core";

@Injectable()
export class ReportingService{

    static testBatchIDisSubscribed: boolean;
    static testBatchisSubscribed: boolean;
    static lastBatchID: any;
    static lastBatch: any;
    static BatchIDFetcher: any;
    static BatchFetcher: any;

    static getBatchIdOBS: any;

    static runLastTestBatchFetcher(http: Http){
        this.testBatchIDisSubscribed = false;
        this.testBatchisSubscribed = false;
        this.getBatchIdOBS = http.get('http://10.100.65.193:1337/reporting/last_test_batch_id')
            .map(res => res.json());

        this.BatchIDFetcher = Observable.interval(6000).subscribe(results =>{
            if(!this.testBatchIDisSubscribed){
                this.getBatchIdOBS
                    .subscribe(results =>{
                        console.log(results);
                        this.lastBatchID = results
                });}
            this.testBatchIDisSubscribed = true;

            if(this.lastBatchID && !this.testBatchisSubscribed){
                this.BatchFetcher = Observable.interval(6000).subscribe(results =>{
                    var url = 'http://10.100.65.193:1337/reporting/last_test_batch/'+this.lastBatchID[0].batch_id;
                    http.get(url)
                        .map(res => res.json())
                        .subscribe(results => {
                            console.log(results);
                            this.lastBatch = results
                        });
                    this.testBatchisSubscribed = true;
                });
            }
        });
    }



    static getLastBatchID(){
        if (this.lastBatchID)
            return this.lastBatchID[0];
    }
    static getLastBatch(){
        if (this.lastBatch)
            return this.lastBatch;
    }

}
