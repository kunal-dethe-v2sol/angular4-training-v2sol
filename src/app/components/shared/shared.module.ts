import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {SharedHeaderGuestComponent} from './../shared/header/guest/shared-header-guest.component';
import {SharedNavigationTopGuestComponent} from './../shared/navigation/top/guest/shared-navigation-top-guest.component';
import {SharedFooterGuestComponent} from './../shared/footer/guest/shared-footer-guest.component';
import {SharedHeaderUserComponent} from './../shared/header/user/shared-header-user.component';
import {SharedNavigationTopUserComponent} from './../shared/navigation/top/user/shared-navigation-top-user.component';
import {SharedFooterUserComponent} from './../shared/footer/user/shared-footer-user.component';

import {SharedHttpService} from './service/shared-http.service';

@NgModule({
    declarations: [
//        SharedHeaderGuestComponent,
//        SharedNavigationTopGuestComponent,
//        SharedFooterGuestComponent,
        SharedHeaderUserComponent,
        SharedNavigationTopUserComponent,
        SharedFooterUserComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        SharedHttpService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: []
})
export class SharedModule {}
