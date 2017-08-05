import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MessagesRoutes} from './messages.routes';
//import { MessagesListComponent } from './list/messages-list.component';

@NgModule({
    declarations: [
        //    MessagesListComponent,
    ],
    imports: [
        CommonModule,
        MessagesRoutes,
    ],
    providers: [],
})
export class MessagesModule {}
