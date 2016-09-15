/**
 * Created by mpatterson on 8/11/16.
 */
System.register(["angular2/core", "./services/configure-testbatch.service", "./configure-testbatch-dropdown", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, configure_testbatch_service_1, configure_testbatch_dropdown_1, common_1;
    var ConfigureTestBatchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (configure_testbatch_service_1_1) {
                configure_testbatch_service_1 = configure_testbatch_service_1_1;
            },
            function (configure_testbatch_dropdown_1_1) {
                configure_testbatch_dropdown_1 = configure_testbatch_dropdown_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ConfigureTestBatchComponent = (function () {
                function ConfigureTestBatchComponent(_configure_test_service, _fb) {
                    this._configure_test_service = _configure_test_service;
                    this._fb = _fb;
                    this.TestQueue_tests = [];
                    this.reoccurring = false;
                    this.test_number = 1;
                    console.log('Constructor');
                    /*this.myForm = _fb.group({
                        "test_time": ["", Validators.required],
                        "qa_server": ["", Validators.required],
                        "automation_servers": ["", Validators.required]
                    });*/
                }
                Object.defineProperty(ConfigureTestBatchComponent.prototype, "sendTest", {
                    set: function (test) {
                        console.log("Configure-testbatch ");
                        if (test != undefined) {
                            console.log("Configure-testbatch -> pushing another test to list.\n\n");
                            test['hasRun'] = false;
                            test['test_number'] = this.test_number;
                            //test['requires_java_client']=this.requires_java_client;
                            console.log(test);
                            this.test_number++;
                            this.TestQueue_tests.push(test);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ConfigureTestBatchComponent.prototype.ngAfterViewInit = function () {
                    console.log('AfterViewInit');
                };
                ConfigureTestBatchComponent.prototype.timeValuesUpdated = function (event) {
                    console.log(event);
                    //this.time_dropdown_values = event.value
                };
                ConfigureTestBatchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._configure_test_service.get_dropdown_values().subscribe(function (res) {
                        _this.config = res;
                        _this.getTimeDropdownValues(res);
                        _this.getQADropdownValues(res);
                        _this.getSubNodeDropdownValues(res);
                    });
                };
                ConfigureTestBatchComponent.prototype.removeTest = function (index) {
                    var tmp_list = [];
                    console.log('\'' + index + '\'');
                    for (var i = 0; i < this.TestQueue_tests.length; i++) {
                        if (i != index) {
                            tmp_list.push(this.TestQueue_tests[i]);
                        }
                    }
                    this.TestQueue_tests = tmp_list;
                };
                ConfigureTestBatchComponent.prototype.getTimeDropdownValues = function (res) {
                    var _this = this;
                    //this.config = res;
                    //console.log(res);
                    var url_1 = 'http://' + this.config.main_node.host + ':' + this.config.main_node.port + this.config.data_urls.time_dropdown_values;
                    this._configure_test_service.get_data(url_1)
                        .subscribe(function (res) {
                        _this.time_dropdown_values = res;
                    });
                };
                ConfigureTestBatchComponent.prototype.getQADropdownValues = function (res) {
                    var _this = this;
                    //this.config = res;
                    //console.log(res);
                    var url_1 = 'http://' + this.config.main_node.host + ':' + this.config.main_node.port + this.config.data_urls.qa_dropdown_values;
                    this._configure_test_service.get_data(url_1)
                        .subscribe(function (res) {
                        _this.qa_server_dropdown_values = res;
                    });
                };
                ConfigureTestBatchComponent.prototype.getSubNodeDropdownValues = function (res) {
                    var _this = this;
                    //this.config = res;
                    //console.log(res);
                    var url_1 = 'http://' + this.config.main_node.host + ':' + this.config.main_node.port + this.config.data_urls.sub_node_dropdown_values;
                    this._configure_test_service.get_data(url_1)
                        .subscribe(function (res) {
                        _this.sub_node_dropdown_values = res;
                    });
                };
                ConfigureTestBatchComponent.prototype.doThis2 = function (event) {
                    console.log(event);
                };
                ConfigureTestBatchComponent.prototype.checkValues = function (event) {
                    if (event.isTrusted == true) {
                        event.preventDefault();
                        console.log(event);
                        var requires_java_client = false;
                        for (var i = 0; i < this.TestQueue_tests.length; i++) {
                            if (this.TestQueue_tests[i].requires_java_client == true) {
                                requires_java_client = true;
                            }
                        }
                        var values = [this.selected_sub_node, this.selected_qa_server, this.selected_time];
                        var values_json = { "sub_node": this.selected_sub_node,
                            "qa_server": this.selected_qa_server,
                            "time": ConfigureTestBatchComponent.extractTimeMinutes(this.selected_time),
                            "reoccurring": this.reoccurring,
                            "has_run": false,
                            "requires_java_client": requires_java_client,
                            "tests": this.TestQueue_tests
                        };
                        console.log(values_json);
                        var url = 'http://' + this.config.main_node.host + ':' + this.config.main_node.port + '/new_test_batch';
                        this._configure_test_service.sendTestBatch(url, values_json);
                    }
                };
                ConfigureTestBatchComponent.prototype.setTestTime = function (value) { this.selected_time = value.dropdown_value; };
                ConfigureTestBatchComponent.prototype.setQAServer = function (value) {
                    this.selected_qa_server = value.dropdown_value;
                };
                ConfigureTestBatchComponent.prototype.setSubNode = function (value) { this.selected_sub_node = value.dropdown_value; };
                ConfigureTestBatchComponent.extractTimeMinutes = function (time) {
                    var s = time.split(":");
                    return parseInt(s[0]) * 60 + parseInt(s[1]);
                };
                ConfigureTestBatchComponent.prototype.setReoccurring = function (event) {
                    this.reoccurring = event.srcElement.checked;
                };
                ConfigureTestBatchComponent.prototype.addJavaClientToTests = function () {
                    this.TestQueue_tests.unshift({
                        "test_name": "Open Java Client",
                        "test_file": "run_jnlp.bat",
                        "hasRun": false,
                        "test_number": 0
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], ConfigureTestBatchComponent.prototype, "sendTest", null);
                ConfigureTestBatchComponent = __decorate([
                    core_1.Component({
                        selector: "configure-testbatch",
                        templateUrl: 'app/components/testing_config/configure-testbatch.html',
                        providers: [configure_testbatch_service_1.ConfigureTestBatchService],
                        directives: [configure_testbatch_dropdown_1.ConfigureTestBatchDropdownComponent]
                    }), 
                    __metadata('design:paramtypes', [configure_testbatch_service_1.ConfigureTestBatchService, common_1.FormBuilder])
                ], ConfigureTestBatchComponent);
                return ConfigureTestBatchComponent;
            }());
            exports_1("ConfigureTestBatchComponent", ConfigureTestBatchComponent);
        }
    }
});
//# sourceMappingURL=configure-testbatch.component.js.map