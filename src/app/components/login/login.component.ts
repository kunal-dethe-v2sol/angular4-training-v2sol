import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SharedService} from './../shared/service/shared.service';

@Component({
    selector: 'linkcxo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    login() {
        this._sharedService.getAuthService().setLoggedIn(true);
        this._sharedService.loginEventEmitter.emit(true);
        this._router.navigate(['home']);
    }

}
