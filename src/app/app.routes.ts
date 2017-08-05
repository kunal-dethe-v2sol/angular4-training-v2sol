import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                pathMatch: 'full',
            },
            {
                path: 'signup',
                component: SignUpComponent,
                pathMatch: 'full',
            }
        ]
    },
    {path: '**', pathMatch: 'full', redirectTo: '/login'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutes {}
