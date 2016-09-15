/**
 * Created by root on 8/8/16.
 */
import {Http, HTTP_PROVIDERS, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import {Injectable} from "angular2/core";

@Injectable()
export class ConfigureTestBatchService{

    dropdown_values: any[];

    constructor(private _http: Http){}

    get_config(){
        return this._http.get('../orion_config.json')
            .map((res:Response)=> res.json())
    }

    get_data(url_1){
        return this._http.get(url_1)
            .map(res => res.json())
    }

    get_dropdown_values(){
        return this.get_config();
    }

    sendTestBatch(url, test_batch){
        console.log('Submitting test batch');
        console.log(url);
        var data = JSON.stringify(test_batch);
        var params = 'json='+data;
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Content-Type','application/json');
        var options = new RequestOptions({ headers: headers });
        this._http.post(url, data, options).subscribe(res => {
            console.log('subscribe');
            console.log(res);

        });


        //console.log(json_x);
        //var server = '10.100.65.160';//'10.100.65.193';//'10.100.65.160';
        //var sub_node = 'uft2.awarix.com';
        //var main_node = '10.100.65.193';//'10.40.215.154';
        //var sub_node_port = '6437';
        //var main_node_port = '1337';
        //var url_1 = 'http://'+sub_node+':'+sub_node_port+'/run_tests';
        //var url_2 = 'http://'+main_node+':'+main_node_port+'/new_test_batch';
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
        /*console.log(url_1);
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

            });*/
    }


}