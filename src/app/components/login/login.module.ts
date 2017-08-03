import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LoginRoutes} from './login.routes';
import {LoginComponent} from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutes
    ],
    providers: [],
})
export class LoginModule {}
