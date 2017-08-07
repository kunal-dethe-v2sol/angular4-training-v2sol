import {Injectable, EventEmitter} from '@angular/core';

import {SharedAuthService} from './shared-auth.service';
import {SharedHttpService} from './shared-http.service';
import {SharedStorageService} from './shared-storage.service';

@Injectable()
export class SharedService {

    //Variables
    public loginEventEmitter: EventEmitter<boolean> = new EventEmitter();

    //Constructor parameters
    static get parameters() {
        return [
            SharedAuthService,
            SharedHttpService,
            SharedStorageService
        ];
    }

    //Constructor
    constructor(
        private _authService,
        private _httpService,
        private _storageService) {

        
    }

    //Custom Methods
    /**
     * Returns the Auth Service instance.
     */
    getAuthService() {
        return this._authService;
    }

    /**
     * Returns the Http Service instance.
     */
    getHttpService() {
        return this._httpService;
    }

    /**
     * Returns the Storage Service instance.
     */
    getStorageService() {
        return this._storageService;
    }
}