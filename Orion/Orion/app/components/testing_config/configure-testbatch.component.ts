/**
 * Created by mpatterson on 8/11/16.
 */


import {Component, OnInit, Input} from "angular2/core";
import {ConfigureTestBatchService} from "./services/configure-testbatch.service"
import {AfterViewInit} from "@angular/core";
import {ConfigureTestBatchDropdownComponent} from "./configure-testbatch-dropdown";
import {FormBuilder, Validators} from "angular2/common";

@Component({
    selector:"configure-testbatch",
    templateUrl:'app/components/testing_config/configure-testbatch.html',
    providers:[ConfigureTestBatchService],
    directives:[ConfigureTestBatchDropdownComponent]
})

export class ConfigureTestBatchComponent implements OnInit, AfterViewInit{
    time_dropdown_values: any[];
    qa_server_dropdown_values: any[];
    sub_node_dropdown_values: any[];
    selected_time: any;
    selected_qa_server: any;
    selected_sub_node: any;
    TestQueue_tests = [];
    reoccurring = false;
    config: any;
    test_number=1;
    @Input() set sendTest(test: string){
        console.log("Configure-testbatch ");
        if (test != undefined){
            console.log("Configure-testbatch -> pushing another test to list.\n\n");
            test['hasRun']=false;
            test['test_number']=this.test_number;
            //test['requires_java_client']=this.requires_java_client;
            console.log(test);
            this.test_number++;
            this.TestQueue_tests.push(test);
        }
    }

    constructor(private _configure_test_service:ConfigureTestBatchService, private _fb: FormBuilder){
        console.log('Constructor');
        /*this.myForm = _fb.group({
            "test_time": ["", Validators.required],
            "qa_server": ["", Validators.required],
            "automation_servers": ["", Validators.required]
        });*/
    }

    ngAfterViewInit(){
        console.log('AfterViewInit');
    }

    timeValuesUpdated(event){
        console.log(event);
        //this.time_dropdown_values = event.value
    }

    ngOnInit(){
       this._configure_test_service.get_dropdown_values().subscribe(res => {
                this.config = res;
                this.getTimeDropdownValues(res);
                this.getQADropdownValues(res);
                this.getSubNodeDropdownValues(res);
            }
        );

    }

    removeTest(index){
        var tmp_list = [];
        console.log('\''+index+'\'');
        for(var i=0; i < this.TestQueue_tests.length;i++){
            if (i != index) {
               tmp_list.push(this.TestQueue_tests[i]);
            }
        }
        this.TestQueue_tests = tmp_list;
    }

    getTimeDropdownValues(res){
        //this.config = res;
        //console.log(res);
        var url_1 = 'http://'+this.config.main_node.host+':'+this.config.main_node.port+this.config.data_urls.time_dropdown_values;
        this._configure_test_service.get_data(url_1)
            .subscribe(res => {
                this.time_dropdown_values= res;
            });
    }
    getQADropdownValues(res){
        //this.config = res;
        //console.log(res);
        var url_1 = 'http://'+this.config.main_node.host+':'+this.config.main_node.port+this.config.data_urls.qa_dropdown_values;
        this._configure_test_service.get_data(url_1)
            .subscribe(res => {
                this.qa_server_dropdown_values= res;
            });
    }
    getSubNodeDropdownValues(res){
        //this.config = res;
        //console.log(res);
        var url_1 = 'http://'+this.config.main_node.host+':'+this.config.main_node.port+this.config.data_urls.sub_node_dropdown_values;
        this._configure_test_service.get_data(url_1)
            .subscribe(res => {
                this.sub_node_dropdown_values= res;
            });
    }

    doThis2(event){
        console.log(event)
    }
    checkValues(event){
        if(event.isTrusted == true){
            event.preventDefault();
            console.log(event);
            var requires_java_client = false;
            for (var i = 0; i < this.TestQueue_tests.length; i++){
                if(this.TestQueue_tests[i].requires_java_client == true){
                    requires_java_client = true;
                    //this.addJavaClientToTests();
                }
            }
            var values = [this.selected_sub_node,this.selected_qa_server, this.selected_time];
            var values_json = { "sub_node":this.selected_sub_node,
                                "qa_server":this.selected_qa_server,
                                "time":ConfigureTestBatchComponent.extractTimeMinutes(this.selected_time),
                                "reoccurring":this.reoccurring,
                                "has_run": false,
                                "requires_java_client":requires_java_client,
                                "tests":this.TestQueue_tests
            };
            console.log(values_json);
            var url = 'http://'+this.config.main_node.host+':'+this.config.main_node.port+'/new_test_batch';
            this._configure_test_service.sendTestBatch(url, values_json);
        }
    }

    setTestTime(value){this.selected_time=value.dropdown_value;}
    setQAServer(value){
        this.selected_qa_server=value.dropdown_value;
    }
    setSubNode(value){this.selected_sub_node=value.dropdown_value;}

    static extractTimeMinutes(time){
        var s  = time.split(":");
        return parseInt(s[0])*60+parseInt(s[1]);
    }

    setReoccurring(event){
        this.reoccurring = event.srcElement.checked;

    }

    addJavaClientToTests(){
        this.TestQueue_tests.unshift({

            "test_name" : "Open Java Client",
            "test_file" : "run_jnlp.bat",
            "hasRun" : false,
            "test_number" : 0
        });
    }
}

