/**
 * Created by mpatterson on 8/12/16.
 */


import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector:"available-list",
    template:`
    <div class="list-group" >
        <button *ngFor="let test of available_list"  [value]="test.test_name" type="button" class="list-group-item" (click)="sendTestToQueue(test.test_name, test.test_file, test.requires_java_client)" >
            <div class="showhim">
                {{test.test_name}}
                <div class="showme">
                    <i class="glyphicon glyphicon-arrow-right "></i>
                </div>

            </div>
        </button>
        
    </div>
    
    `,


})

export class AvailableList{

    @Input() available_list: any[];
    @Output() sendTest = new EventEmitter<any>();
    constructor(){}

    doThis(){
        console.log("BLAH");
        this.available_list.push({"test_name":"BLAH","test_file":"something.bat"})
    }

    sendTestToQueue(test_name, test_file, requires_java_client){

        console.log("Available-list emitting test -> Available-test");
        console.log(this.sendTest);
        this.sendTest.emit({"test_name":test_name,"test_file":test_file, "requires_java_client":requires_java_client});
    }

}