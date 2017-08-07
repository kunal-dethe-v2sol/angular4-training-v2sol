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

    //Constructor
    constructor(
        private _sharedService: SharedService,
        private _router: Router) {}

    //Angular Hooks
    ngOnInit() {
    }

    //Custom Methods
    logout() {
        this._sharedService.onLoginEvent.emit(false);
        this._router.navigate(['']);
    }
}
