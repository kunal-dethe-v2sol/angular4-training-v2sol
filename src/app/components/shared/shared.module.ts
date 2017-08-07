import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {SharedService} from './service/shared.service';
import {SharedHttpService} from './service/shared-http.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        SharedService,
        SharedHttpService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: []
})
export class SharedModule {}
