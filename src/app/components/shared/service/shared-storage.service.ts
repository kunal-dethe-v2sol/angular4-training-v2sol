import {Injectable} from '@angular/core';
import {LocalStorage, SessionStorage} from '@cedx/ngx-webstorage';

@Injectable()
export class SharedStorageService {
    
    //Variables

    //Constructor parameters
    static get parameters() {
        return [
            LocalStorage,
            SessionStorage
        ];
    }

    //Constructor
    constructor(
        private _localStorageService,
        private _sessionStorageService) {


    }

    //Custom Methods
    /**
     * Returns the LocalStorage instance.
     */
    getLocal() {
        return this._localStorageService;
    }

    /**
     * Returns the SessionStorage instance.
     */
    getSession() {
        return this._sessionStorageService;
    }
}