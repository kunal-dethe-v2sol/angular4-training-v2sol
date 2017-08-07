import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';
import {SignUpComponent} from './../signup/signup.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        //        canActivate: []
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutes {}
