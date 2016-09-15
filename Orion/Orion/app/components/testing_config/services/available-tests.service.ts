/**
 * Created by root on 8/8/16.
 */
import {Http, HTTP_PROVIDERS, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import {Injectable} from "angular2/core";

@Injectable()
export class AvailableTestsServices{

    available_tests: any;

    constructor(private _http: Http){}

    get_config(){
       return this._http.get('../orion_config.json')
            .map((res:Response)=> res.json())
    }

    get_data(url_1){
        return this._http.get(url_1)
            .map(res => res.json())
    }

    get_available_tests_list(){
        return this.get_config();
    }


}