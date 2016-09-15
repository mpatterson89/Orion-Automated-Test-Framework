/**
 * Created by ehnsgz5 on 4/27/2016.
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var async = require('async');
var http = require('http');
var fs = require('fs');
var path = require('path');
var contents = fs.readFileSync(path.join(__dirname,'../Orion','orion_config.json'), 'utf-8');
var orion_config = JSON.parse(contents);
var mongo_server = orion_config.mongodb.host;

var Schema = mongoose.Schema;

var TestBatchIDs_SCHEMA = new Schema({
    batch_id: String,
    time: Date,
    version: String,
    env: String
});
var TestBatch_SCHEMA = new Schema({
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
});
var CurrentTestBatch_SCHEMA = new Schema({
    time: Number,
    sub_node: String,
    qa_server: String,
    reoccurring: Boolean,
    has_run: Boolean,
    requires_java_client: Boolean,
    tests : [
        {
            test_name: String,
            test_file: String,
            test_number: Number,
            hasRun: Boolean
        }
    ]
});

var NodeState_SCHEMA = new Schema({
    last_update_time: Date,
    sub_node: String,
    needs_reset_run: Boolean
});

var AvailableTests_SCHEMA = new Schema({
    test_name: String,
    test_file: String
});

var ConfigureTestBatchData_SCHEMA = new Schema({
    element: String,
    values: []
});

mongoose.connect('mongodb://'+mongo_server+'/mc_dev');


var NodeState= mongoose.model('NodeState', NodeState_SCHEMA, 'NodeState');
//var d = new Date();
//NodeState.insertMany([{'last_update_time':d, 'sub_node':'uft3.awarix.com'}], null);

app.get('/', function(req, res){
});

app.get(orion_config.data_urls.available_tests, function(req, res){
    var Tests = mongoose.model('AvailableTests', AvailableTests_SCHEMA, 'AvailableTests');
    Tests.find({}).exec(function(err, results){
        console.log(results);
        res.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin':'*'});
        res.end(JSON.stringify(results));
    });
});

app.get(orion_config.data_urls.time_dropdown_values, function(req, res){
    var Tests = mongoose.model('ConfigureTestBatchData', ConfigureTestBatchData_SCHEMA, 'ConfigureTestBatchData');
    Tests.find({'element':'dropdown-time'}).exec(function(err, results){
        console.log(results);
        res.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin':'*'});
        res.end(JSON.stringify(results));
    });
});

app.get(orion_config.data_urls.qa_dropdown_values, function(req, res){
    var Tests = mongoose.model('ConfigureTestBatchData', ConfigureTestBatchData_SCHEMA, 'ConfigureTestBatchData');
    Tests.find({'element':'dropdown-qaservers'}).exec(function(err, results){
        console.log(results);
        res.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin':'*'});
        res.end(JSON.stringify(results));
    });
});

app.get(orion_config.data_urls.sub_node_dropdown_values, function(req, res){
    var Tests = mongoose.model('ConfigureTestBatchData', ConfigureTestBatchData_SCHEMA, 'ConfigureTestBatchData');
    Tests.find({'element':'dropdown-nodeservers'}).exec(function(err, results){
        console.log(results);
        res.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin':'*'});
        res.end(JSON.stringify(results));
    });
});

app.get('/reporting/last_test_batch_id',function(req, res){
    var Test = mongoose.model('TestBatchIDs',TestBatchIDs_SCHEMA,'TestBatchIDs' );
    Test.find({}).sort({'time': -1}).limit(1).exec(function(err, results ){
        console.log(results);
        console.log('Done');
        res.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin':'*'});
        res.end(JSON.stringify(results));
    });

});
app.get(orion_config.data_urls.last_test_batch,function(req, res){
    //console.log('Last Batch: ', req.params.batchId);
    //mongoose.connect('mongodb://localhost/mc_dev');
    var Test = mongoose.model('TestBatches',TestBatch_SCHEMA,'TestBatches' );
    Test.find({'batch_id':req.params.batchId}, function(err, results ){
        console.log(results);
        console.log('Done');
        res.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin':'*'});
        res.end(JSON.stringify(results));
    });
});

function run_x(data, callback){
    console.log('level 1');
    callback(data);
}

function runTests(data) {
    console.log('level 2');
    console.log(data);
    var i = 0;
    while (1>5) {
        //console.log(i);
        i++;
    }
}




var options_get_in_use = {
    host: orion_config.sub_node_1.host,
    path: "/in_use",
    port: orion_config.sub_node_1.port,
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
    }
};
var options_post_test = {
    host: orion_config.sub_node_1.host,
    path: "/run_test",
    port: orion_config.sub_node_1.port,
    method: "POST",
    headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin":"*"
    }
};
var tests = "";
//app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.options('/new_test_batch', cors());

app.post('/new_test_batch', function(req, res){
    console.log('Received TestBatch POST to Main Node');
    tests = req.body;
    res.writeHead(200,{ 'Access-Control-Allow-Origin':'*'});
    res.end('Received...');
    options_get_in_use.host = req.body.sub_node;
    options_post_test.host  = req.body.sub_node;
    checkInUse(options_get_in_use, function(res){
        console.log("callback");
        console.log('Res:', res);
        res = 'true';
        if(res=='true'){
            console.log('TRUE, Store in Scheduled Tests');
            var store_tests = mongoose.model('ScheduledTestBatches',CurrentTestBatch_SCHEMA,'ScheduledTestBatches' );
            store_tests.insertMany([tests], function(err, res){
                console.log(err);
                console.log('Inserted');
                PostNextTest(options_post_test, function () {});
            });
        }else{
            console.log("FALSE, Send Test and Store in Current Tests");
            var store_tests = mongoose.model('CurrentTestBatches',CurrentTestBatch_SCHEMA,'CurrentTestBatches' );
            store_tests.find({'sub_node':tests.sub_node}).limit(1).exec(function(err, results ) {
                if (results.length > 0){
                    console.log('updating...');
                    store_tests.findOneAndUpdate({'sub_node':tests.sub_node}, tests, function (err, res) {
                        console.log('updated.');
                            PostNextTest(options_post_test, function () {});
                    });
                }else{
                    store_tests.insertMany([tests], function (err, res) {
                        console.log('Inserted');
                        PostNextTest(options_post_test, function () {});
                    });
                }

            });
        }
    });

});



function checkInUse(_options, callback){
    console.log("Checking In Use");
    var req = http.request(_options, function (res) {
        var responseString = "";
        res.on("data", function (data) {
            console.log("data");
            responseString += data;
        });
        res.on("end", function () {
            console.log("end");
            console.log(responseString);
            callback(responseString);
        });
    });
    req.on("error", function(err){
        console.log('Sub node could not be reached... Storing test batch in queue');
        callback("true");
    });
    req.end();
    console.log("req end");
}
function PostNextTest(_options, callback){
    console.log("Sending Sub Node the next test.");
    var req = http.request(_options, function (res) {
        var responseString = "";

        res.on("data", function (data) {
            responseString += data;
            // save all the data from response
        });
        res.on("end", function () {
            console.log(responseString);
            callback(responseString);
            // print to console when response ends
        });
    });
    req.write('time for next test');//JSON.stringify(tests));
    req.on("error", function(err){
        console.log("Error Sub Node could not be reached for posting next test.");
    });
    req.end();
}


app.listen(1337);
console.log('Server loaded');


