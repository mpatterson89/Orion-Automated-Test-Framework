/**
 * Created by ehnsgz5 on 5/3/2016.
 */

var express = require('express');
var cors = require('cors');
var child_process = require('child_process');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var fs = require('fs');
var contents = fs.readFileSync('../Orion/orion_config.json', 'utf-8');
var orion_config = JSON.parse(contents);

var mongo_server = orion_config.mongodb.host;//'10.100.65.193';//'10.40.215.154';//'10.100.65.193';
var Schema = mongoose.Schema;
var sub_node = orion_config.sub_node_1.host;

global.beingUsed = false;
global.busy      = false;
ObjectId         = Schema.Types.ObjectId;
var CurrentTestBatch_SCHEMA = new Schema({
    //_id: ObjectId,
    time: String,
    sub_node: String,
    qa_server: String,
    tests : [
        {
            test_name: String,
            test_file: String,
            test_number: Number,
            hasRun: Boolean
        }
    ]
});
mongoose.connect('mongodb://'+mongo_server+'/mc_dev');

//If Sub-Node restarted during test batch, will rerun the entire testbatch. 
var Test = mongoose.model('CurrentTestBatches',CurrentTestBatch_SCHEMA,'CurrentTestBatches' );
var TestsScheduled = mongoose.model('ScheduledTestBatches',CurrentTestBatch_SCHEMA,'ScheduledTestBatches' );
// Test.find({'sub_node': sub_node}).limit(1).exec(function(err, results){
//         //console.log(results[0]);
//         var result = results[0];
//         if (results.length > 0){
//             global.beingUsed = true;
//             this.busy = true;
//             tests = result.tests
//             tests.forEach(function(test){
//                 test.hasRun = false;
//             })
//             result.tests = tests;
//             //console.log('Changed: ', result);
//             Test.findOneAndUpdate({'sub_node':sub_node}, result, function (err, res) {
//                             console.log('Reset Test, Now Running...');
//                             getNextTest();     
//                 });
//         }else{
//             getNextTestBatch();
//         }
// });
getNextTest();

app.options('/run_tests', cors());

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/run_tests', function(req, res, next) {
    console.log('middle');
    //console.log(req);
    console.log(req.body.blah);
    //console.log(app.options);
    //res.writeHead(404);
    //req.header('Access-Control-Allow-Origin', '*');
    //req.header('Access-Control-Allow-Header', 'X-Requested-With');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Access-Control-Allow-Origin');
    next();
});

app.get('/', function(req, res){
    console.log('Received GET');
    res.writeHead(404);
    res.write('Bloop');
    res.end()
});




app.get('/create_transports', function(req, res){
    console.log('Received GET run');
    console.log('Received Create Transports: ', req.body);
    res.writeHead(404, {'Access-Control-Allow-Origin':'*', 'Content-Type':'text/plain'});
    res.end('Received...');
    for(var i=0; i < 3; i++){
        //console.log('Runing Test: ', tests[i]);
        child_process.exec('python C:/qa/Tests/Transport/Transport_Tab_Web_Verification/create_lots_of_transports.py',
            function(error, stdout, stderr){
            //console.log(stdout);
            //console.log(stderr);
            //console.log(error);
        });
    }
});


app.get('/complete_transports', function(req, res){
    console.log('Received GET run');
    console.log('Received Create Transports: ', req.body);
    res.writeHead(404, {'Access-Control-Allow-Origin':'*', 'Content-Type':'text/plain'});
    res.end('Received...');
    for(var i=1; i < 4; i++){
        //console.log('Runing Test: ', tests[i]);
        var command = 'python C:/qa/Tests/Transport/Transport_Tab_Web_Verification/complete_lots_of_transports.py '+i;
        child_process.exec(command,  function(error, stdout, stderr){
            //console.log(stdout);
            //console.log(stderr);
            //console.log(error);
        });
    }
});

app.get('/run_testzs', function(req, res){
    console.log('Received GET run');
    console.log('Received Request: ', req.body);

    res.writeHead(404, {'Access-Control-Allow-Origin':'*', 'Content-Type':'text/plain'});
    res.end('Received...');
    for(var i=0; i < 60; i++){
        //console.log('Runing Test: ', tests[i]);
        child_process.exec('python C:/qa/Tests/TaskSorter/tasksorter_verification.py',  function(error, stdout, stderr){
            //console.log(stdout);
            //console.log(stderr);
            //console.log(error);
        });
    }
});
app.get('/run_testxs/', function(req, res){
    console.log('Received GET run');
    console.log('Received Request: ', req.body);

    res.writeHead(404, {'Access-Control-Allow-Origin':'*', 'Content-Type':'text/plain'});
    res.end('Received...');
    //res.writeHead(200, {'Access-Control-Allow-Origin':'*'});
    //res.end('Received...');
    //child_process.exec('C:/qa/Main/Tests/transport_tab_verification.bat', function(error, stdout, stderr){
    //    console.log(stdout);
    //});
    for(var i=0; i < 40; i++){
        //console.log('Runing Test: ', tests[i]);
        child_process.exec('python C:/qa/Tests/TaskSorter/tasksorter_verification.py' , function(error, stdout, stderr){
            //console.log(stdout);
            //console.log(stderr);
            //console.log(error);
        });
    }
});




app.get('/in_use', function(req, res){
        res.writeHead(200, {'Access-Control-Allow-Origin':'*', 'Content-Type':'text/plain'});
        //res.write('in_use='+this.beingUsed);
    if (this.beingUsed == true){
        res.end('true');
    }else{
        
        res.end('false');

    }
    //console.log();
});

app.post('/run_test',cors(), function(req, res){
    //console.log('Received POST: ');
    //console.log(req.body);
    //var test = req.body.test_file;
    res.writeHead(200, {'Access-Control-Allow-Origin':'*'});
    res.end('Received POST, Checking for next test...');
    console.log("Busy: ", this.busy, " BeingUsed: ", this.beingUsed);
    if (!this.busy && !this.beingUsed){
        this.beingUsed = true;
        getNextTest();
    }
    
});

app.get('/test_completed_notification', function(req, res){
    console.log('Received TEST COMPLETED');
    //console.log(req.body);
    //var test = req.body.test_file;
    res.writeHead(200, {'Access-Control-Allow-Origin':'*','Content-Type':'text/plain'});
    res.end('Received, Checking for next test...');
    //set hasRun to true//
    setTestHasRun();
    //getNextTest();
});


function getNextTest(){
    console.log('sub_node: ', sub_node);
    Test.find({'sub_node': sub_node}).limit(1).exec(function(err, results){
        var result = results[0];
        var next_test = {};
        var hasTest = false;
        if (results.length > 0){
            var lowest  = result.tests.length;
            global.beingUsed = true;
            tests = result.tests;
            tests.forEach(function(test){
                if(test.hasRun == false){
                    hasTest = true;
                    if (test.test_number-1 < lowest){
                        lowest = test.test_number;
                        next_test = test
                    }
                }
            })//end foreach
            
            
            if(hasTest){
                console.log('Running test_file: ', next_test.test_file,  '  test#: ',
                                             next_test.test_number, ' of ', result.tests.length );
                child_process.exec('C:/qa/Main/Tests/'+next_test.test_file+ ' '+result.qa_server ,
                    function(error, stdout, stderr){
                        console.log(stdout);
                        console.log(stderr);
                        console.log(error);
                });  
            }else{
                console.log('Test Batch Complete');
                Test.find({'sub_node': sub_node}).limit(1).remove().exec(function(err, results){});
                getNextTestBatch();
            }
        }//end if
    });//end find
}

//after current test is run, search for the next testbatch
function getNextTestBatch(){
    console.log('searching for next test batch');
    //need to sort by time, find now or < now <-- will refactor this later when time field is added
    TestsScheduled.find({'sub_node': sub_node}).limit(1).exec(function(err, result){
        console.log('Tests Batches Found: ', result.length);
        if(result.length > 0){
            Test.insertMany([result[0]], function(err, res){
                console.log('[ScheduledTestBatch] found, moving to [CurrentTestBatches] and starting');
                this.beingUsed = true;
                this.busy      = true;
                console.log('RESULT: ', result);
                console.log("ID: ", result._id);
                TestsScheduled.findByIdAndRemove({'_id':result[0]._id}).exec(function(err, results){
                    //console.log('Removing test batches: ', results.length, ' ---\n', results);
                    console.log('removing scheduled test batch... calling nextTestBatch');
                    getNextTest();
                });
                
            });
        }else{
            console.log('No Scheduled Test Batch found.');
            this.beingUsed = false;
            this.busy      = false;
        }
    });
}

//reset inprogress current test batch if server is restarted.
function setTestHasRun(){
    console.log('sub_node: ', sub_node);
    Test.find({'sub_node': sub_node}).limit(1).exec(function(err, results){
        var result = results[0];
        if (results.length > 0){
            var lowest  = result.tests.length;
            var tests = result.tests
            tests.forEach(function(test){
                if(test.hasRun == false){
                    if (test.test_number-1 < lowest){
                        lowest = test.test_number;
                    }
                }
            })//end foreach
            tests.forEach(function(test){
                if(test.hasRun == false){
                    if (test.test_number == lowest){
                        test.hasRun = true;
                        console.log('Setting CURRENT TEST hasRun to TRUE, lowest=', lowest);
                    }
                }
            })//end foreach
           
            result.tests = tests;
            console.log('Check hasRun is True: ', result);
            Test.findOneAndUpdate({'sub_node':sub_node}, result, function (err, res) {
                    console.log('Updated Completed Test');
                    getNextTest();  
            });

        }//end if
    });//end find
}


app.listen(orion_config.sub_node_1.port);
console.log('Server Loaded...');

