import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

//import {Http, Response, Headers, RequestOptions} from '@angular/http';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/map';

import {SharedHttpService} from './../shared/service/shared-http.service';

@Injectable()
export class GroupsService {
    _endpoint = 'index.php';

    constructor(
        private _sharedHttpService: SharedHttpService) {
    }

    list(type): Observable<any> {
        return this._sharedHttpService.list(this._endpoint, {type: type});
    }

    detail(id): Observable<any> {
        return this._sharedHttpService.detail(this._endpoint, id);
    }
}
