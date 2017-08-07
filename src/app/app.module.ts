import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StorageModule} from '@cedx/ngx-webstorage';

import {AppComponent} from './app.component';
import {SharedHeaderGuestComponent} from './components/shared/header/guest/shared-header-guest.component';
import {SharedNavigationTopGuestComponent} from './components/shared/navigation/top/guest/shared-navigation-top-guest.component';
import {SharedFooterGuestComponent} from './components/shared/footer/guest/shared-footer-guest.component';
import {SharedHeaderUserComponent} from './components/shared/header/user/shared-header-user.component';
import {SharedNavigationTopUserComponent} from './components/shared/navigation/top/user/shared-navigation-top-user.component';
import {SharedFooterUserComponent} from './components/shared/footer/user/shared-footer-user.component';

import {AppRoutes} from './app.routes';

import {SharedModule} from './components/shared/shared.module';
import {ArticlesModule} from './components/articles/articles.module';
import {GroupsModule} from './components/groups/groups.module';
import {HomeModule} from './components/home/home.module';
import {LoginModule} from './components/login/login.module';
import {MessagesModule} from './components/messages/messages.module';
import {MyNetworkModule} from './components/my-network/my-network.module';
import {PostsModule} from './components/posts/posts.module';
import {SignUpModule} from './components/signup/signup.module';

@NgModule({
    declarations: [
        AppComponent,
        SharedHeaderGuestComponent,
        SharedNavigationTopGuestComponent,
        SharedFooterGuestComponent,
        SharedHeaderUserComponent,
        SharedNavigationTopUserComponent,
        SharedFooterUserComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        StorageModule,
        SharedModule,
        ArticlesModule,
        GroupsModule,
        HomeModule,
        LoginModule,
        MessagesModule,
        MyNetworkModule,
        PostsModule,
        SignUpModule,
        AppRoutes,
    ],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [
        AppComponent,
//        SharedHeaderGuestComponent,
//        SharedNavigationTopGuestComponent,
//        SharedFooterGuestComponent,
    ],
})
export class AppModule {}
