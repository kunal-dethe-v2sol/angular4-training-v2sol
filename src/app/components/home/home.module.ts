import {NgModule} from '@angular/core';

import {HomeRoutes} from './home.routes';
import {HomeComponent} from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutes
    ],
    providers: [],
})
export class HomeModule {}
