import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SignUpRoutes} from './signup.routes';
import {SignUpComponent} from './signup.component';

@NgModule({
    declarations: [
        SignUpComponent,
    ],
    imports: [
        CommonModule,
        SignUpRoutes,
    ],
    providers: [],
})
export class SignUpModule {}
