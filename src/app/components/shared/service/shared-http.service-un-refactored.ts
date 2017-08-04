import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {CONST} from './shared.constants';
import {Group} from './../../groups/group';

@Injectable()
export class SharedHttpService {
    _headers: Headers;
    _options: RequestOptions;
    _apiUrl = CONST['apiURL'];

    constructor(private _http: Http) {
        this._headers = new Headers({
            'Content-Type': 'application/json',
        });
        this._options = new RequestOptions({
            headers: this._headers
        });
    }

    list(endpoint, params = null) {
        endpoint = endpoint + '?' + this._objectToQueryString(params);
        return this._http
            .get(this._apiUrl + endpoint, this._options)
            .map(this._extractData)
            .catch(this._handleError);
    }

    detail(endpoint, id, params = null) {
        endpoint = endpoint + '?id=' + id;
        return this._http
            .get(this._apiUrl + endpoint, this._options)
            .map(this._extractData)
            .catch(this._handleError);
    }

    private _objectToQueryString(object) {
        return Object
            .keys(object)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
            .join('&');
    }
    
    private _extractData(res: Response) {
        let body = <any> res.json().data;
        return body || {};
    }

    private _handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error('errMsg: ', errMsg);
        return Observable.throw(errMsg);
    }
}
