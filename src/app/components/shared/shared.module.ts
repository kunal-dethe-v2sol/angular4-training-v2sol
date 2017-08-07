import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {SharedService} from './service/shared.service';
import {SharedAuthService} from './service/shared-auth.service';
import {SharedHttpService} from './service/shared-http.service';
import {SharedStorageService} from './service/shared-storage.service';

import {SharedHeaderGuestComponent} from './header/guest/shared-header-guest.component';
import {SharedNavigationTopGuestComponent} from './navigation/top/guest/shared-navigation-top-guest.component';
import {SharedFooterGuestComponent} from './footer/guest/shared-footer-guest.component';

import {SharedHeaderUserComponent} from './header/user/shared-header-user.component';
import {SharedNavigationTopUserComponent} from './navigation/top/user/shared-navigation-top-user.component';
import {SharedFooterUserComponent} from './footer/user/shared-footer-user.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        SharedAuthService,
        SharedHttpService,
        SharedService,
        SharedStorageService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [
//        SharedHeaderGuestComponent,
//        SharedNavigationTopGuestComponent,
//        SharedFooterGuestComponent,
    ]
})
export class SharedModule {}
