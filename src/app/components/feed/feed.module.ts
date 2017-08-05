import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SharedHeaderUserComponent} from './../shared/header/user/shared-header-user.component';
import {SharedNavigationTopUserComponent} from './../shared/navigation/top/user/shared-navigation-top-user.component';
import {SharedFooterUserComponent} from './../shared/footer/user/shared-footer-user.component';

import {FeedRoutes} from './feed.routes';
import {FeedComponent} from './feed.component';

@NgModule({
    declarations: [
        FeedComponent,
        SharedHeaderUserComponent,
        SharedNavigationTopUserComponent,
        SharedFooterUserComponent,
    ],
    imports: [
        CommonModule,
        FeedRoutes,
    ],
    providers: [],
    bootstrap: [
        SharedHeaderUserComponent,
        SharedNavigationTopUserComponent,
        SharedFooterUserComponent,
    ],
})
export class FeedModule {}
