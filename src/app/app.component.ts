import {Component, OnInit} from '@angular/core';

import {SharedService} from './components/shared/service/shared.service';

@Component({
    selector: 'linkcxo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    //Variables
    public isLoggedIn = false;

    //Constructor
    constructor(private _sharedService: SharedService) {
        /**
         * Listens to the emit fired to change the main layout after login and logout.
         */
        this._sharedService.onLoginEvent.subscribe(
            (status) => {
                this.isLoggedIn = status;
            });
    }

    //Angular Hooks
    ngOnInit() {
    }

    //Custom Methods
}
