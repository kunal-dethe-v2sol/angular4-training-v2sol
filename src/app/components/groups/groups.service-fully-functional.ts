import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupsService {
    _headers: Headers;
    _options: RequestOptions;

    //Constructor parameters
    static get parameters() {
        return [
            Http
        ];
    }

    constructor(
        private _http: Http) {
        
        this._headers = new Headers({
            'Content-Type': 'application/json',
        });
        this._options = new RequestOptions({headers: this._headers});
    }

    list(type): any {
        return this._http
            .get('http://localhost/angular4-training-v2sol/server/index.php'+'?type='+type, this._options)
            .map(this.extractData)
            //.do(data => console.log('All: ' + JSON.stringify(data)))  //Helps to check whole message
            .catch(this.handleError);
    }
    
    detail(id): any {
        return this._http
            .get('http://localhost/angular4-training-v2sol/server/index.php'+'?id='+id, this._options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json().data;
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error('errMsg: ', errMsg);
        return Observable.throw(errMsg);
    }
}
