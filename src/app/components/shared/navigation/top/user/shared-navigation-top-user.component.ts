import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SharedService} from './../../../service/shared.service';

@Component({
    selector: 'linkcxo-shared-navigation-top-user',
    templateUrl: './shared-navigation-top-user.component.html',
    styleUrls: ['./shared-navigation-top-user.component.css']
})
export class SharedNavigationTopUserComponent implements OnInit {

    //Variables

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            Router
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _router) {


    }

    //Angular Hooks
    ngOnInit() {
    }

    //Custom Methods
    logout() {
        this._sharedService.getAuthService().setLoggedIn(false);
        this._sharedService.loginEventEmitter.emit(false);
        this._router.navigate(['']);
    }
}
