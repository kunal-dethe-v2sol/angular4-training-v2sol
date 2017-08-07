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
    
    //Constructor
    constructor(
        private _sharedService: SharedService,
        private _router: Router) {}

    //Angular Hooks
    ngOnInit() {
    }
    
    //Custom Methods
    login() {
        this._sharedService.onLoginEvent.emit(true);
        this._router.navigate(['home']);
    }

}
