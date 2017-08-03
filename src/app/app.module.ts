import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedHeaderComponent} from './components/shared/header/shared-header.component';
import {SharedNavigationTopComponent} from './components/shared/navigation/top/shared-navigation-top.component';
import {SharedFooterComponent} from './components/shared/footer/shared-footer.component';

import {AppRoutes} from './app.routes';
import {HomeModule} from './components/home/home.module';
import {ArticlesModule} from './components/articles/articles.module';
import {ConnectionsModule} from './components/connections/connections.module';
import {GroupsModule} from './components/groups/groups.module';
import {LoginModule} from './components/login/login.module';
import {MessagesModule} from './components/messages/messages.module';
import {PostsModule} from './components/posts/posts.module';
import {SignUpModule} from './components/signup/signup.module';

@NgModule({
    declarations: [
        AppComponent,
        SharedHeaderComponent,
        SharedNavigationTopComponent,
        SharedFooterComponent,
    ],
    imports: [
        BrowserModule,
        HomeModule,
        ArticlesModule,
        ConnectionsModule,
        GroupsModule,
        LoginModule,
        MessagesModule,
        PostsModule,
        SignUpModule,
        AppRoutes,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        SharedHeaderComponent,
        SharedNavigationTopComponent,
        SharedFooterComponent,
    ]
})
export class AppModule {}
