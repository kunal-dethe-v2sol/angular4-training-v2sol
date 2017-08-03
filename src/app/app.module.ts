import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedHeaderComponent} from './components/shared/header/shared-header.component';
import {SharedNavigationTopComponent} from './components/shared/navigation/top/shared-navigation-top.component';
import {SharedFooterComponent} from './components/shared/footer/shared-footer.component';

import {AppRoutes} from './app.routes';
import {GroupsModule} from './components/groups/groups.module';
import {PostsModule} from './components/posts/posts.module';

@NgModule({
    declarations: [
        AppComponent,
        SharedHeaderComponent,
        SharedNavigationTopComponent,
        SharedFooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutes,
        GroupsModule,
        PostsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        SharedHeaderComponent,
        SharedNavigationTopComponent,
        SharedFooterComponent
    ]
})
export class AppModule {}
