import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {FeedComponent} from './components/feed/feed.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/signup/signup.component';
import {GroupsListComponent} from './components/groups/list/groups-list.component';

import {ArticlesModule} from './components/articles/articles.module';
import {ConnectionsModule} from './components/connections/connections.module';
import {FeedModule} from './components/feed/feed.module';
import {GroupsModule} from './components/groups/groups.module';
import {HomeModule} from './components/home/home.module';
import {LoginModule} from './components/login/login.module';
import {MessagesModule} from './components/messages/messages.module';
import {PostsModule} from './components/posts/posts.module';
import {SignUpModule} from './components/signup/signup.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: GroupsListComponent,
            },
            {
                path: 'login',
                loadChildren: () => LoginModule
            },
            {
                path: 'signup',
                loadChildren: () => SignUpModule
            }
        ]
    },
//    {
//        path: 'groups',
//        loadChildren: () => GroupsModule,
//        outlet: 'user'
//    },
    {
        path: 'feed',
        component: FeedComponent,
        children: [
            {
                path: '',
                component: FeedComponent,
            },
        ]
    },
    {path: '**', pathMatch: 'full', redirectTo: '/login'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutes {}
