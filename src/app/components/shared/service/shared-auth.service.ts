import {Injectable} from '@angular/core';

import {SharedStorageService} from './shared-storage.service';

@Injectable()
export class SharedAuthService {
    
    //Variables
    private _isLoggedIn = false;

    //Constructor parameters
    static get parameters() {
        return [
            SharedStorageService
        ];
    }

    //Constructor
    constructor(
        private _storageService) {

        
    }

    //Custom Methods
    /**
     * Returns if the User is logged in or not.
     */
    isLoggedIn() {
        this._isLoggedIn = this._storageService.getLocal().retrieve('isLoggedIn', false) === 'true';
        return this._isLoggedIn;
    }

    /**
     * Sets whether User is logged in or not.
     */
    setLoggedIn(status) {
        this._isLoggedIn = status;
        this._storageService.getLocal().store('isLoggedIn', this._isLoggedIn);
    }
}