import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AppRoutes} from './app.routes';

import {SharedModule} from './components/shared/shared.module';

import {ArticlesModule} from './components/articles/articles.module';
import {ConnectionsModule} from './components/connections/connections.module';
import {FeedModule} from './components/feed/feed.module';
import {GroupsModule} from './components/groups/groups.module';
import {HomeModule} from './components/home/home.module';
import {LoginModule} from './components/login/login.module';
import {MessagesModule} from './components/messages/messages.module';
import {PostsModule} from './components/posts/posts.module';
import {SignUpModule} from './components/signup/signup.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        SharedModule,
        ArticlesModule,
        ConnectionsModule,
        FeedModule,
        GroupsModule,
        HomeModule,
        LoginModule,
        MessagesModule,
        PostsModule,
        SignUpModule,
        AppRoutes,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
