import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './../home/home.component';
import {SignUpComponent} from './signup.component';

const routes: Routes = [
//    {path: 'signup', component: SignUpComponent},
    {
        path: '',
        component: SignUpComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SignUpRoutes {}
