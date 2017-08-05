import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SharedHeaderGuestComponent} from './../shared/header/guest/shared-header-guest.component';
import {SharedNavigationTopGuestComponent} from './../shared/navigation/top/guest/shared-navigation-top-guest.component';
import {SharedFooterGuestComponent} from './../shared/footer/guest/shared-footer-guest.component';

import {HomeRoutes} from './home.routes';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
        SharedHeaderGuestComponent,
        SharedNavigationTopGuestComponent,
        SharedFooterGuestComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutes,
    ],
    providers: [],
    bootstrap: [
        SharedHeaderGuestComponent,
        SharedNavigationTopGuestComponent,
        SharedFooterGuestComponent,
    ],
})
export class HomeModule {}
