import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {SharedService} from './../shared/service/shared.service';

@Injectable()
export class GroupsService {

    //Variables
    _endpoint = 'index.php';

    //Constructor parameters
    static get parameters() {
        return [
            SharedService
        ];
    }

    //Constructor
    constructor(
        private _sharedService) {


    }

    //Custom Methods
    list(type): Observable<any> {
        return this._sharedService.getHttpService().list(this._endpoint, {type: type});
    }

    detail(id): Observable<any> {
        return this._sharedService.getHttpService().detail(this._endpoint, id);
    }

    delete(id): Observable<any> {
        return this._sharedService.getHttpService().delete(this._endpoint, id);
    }
}
