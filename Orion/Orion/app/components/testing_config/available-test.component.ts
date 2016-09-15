/**
 * Created by mpatterson on 8/11/16.
 */


import {Component, NgZone, Output, OnInit, EventEmitter} from "angular2/core";
import {AvailableTestsServices} from "./services/available-tests.service";
import {AvailableList} from "./available-list.component";

@Component({
    selector:"available-test",
    template:`<available-list [available_list]="available_tests" (sendTest)="sendTestToQueue($event)" ></available-list>`,
    providers:[AvailableTestsServices],
    directives:[AvailableList]

})
export class AvailableTestsComponent implements OnInit{

    available_tests: any[];
    config: any;
    @Output() sendTest = new EventEmitter<any>();


    constructor(private _available_tests: AvailableTestsServices, private _zone:NgZone){}

    ngOnInit(){
       this._available_tests.get_available_tests_list().subscribe(res => {
                this.getData(res);
            }
        );
    }

    getData(res){
        this.config = res;
        console.log(res);
        var url_1 = 'http://'+this.config.main_node.host+':'+this.config.main_node.port+this.config.data_urls.available_tests;
        this._available_tests.get_data(url_1)
            .subscribe(res => {
                this.available_tests= res;
            });
    }

    sendTestToQueue(event){
        console.log("Available-test emitting test -> testing-config");
        console.log(event);
        this.sendTest.emit(event);
    }

}