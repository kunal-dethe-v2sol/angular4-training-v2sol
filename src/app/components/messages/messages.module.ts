import {NgModule} from '@angular/core';

import {MessagesRoutes} from './messages.routes';
//import { MessagesListComponent } from './list/messages-list.component';

@NgModule({
    declarations: [
        //    MessagesListComponent
    ],
    imports: [
        MessagesRoutes
    ],
    providers: [],
})
export class MessagesModule {}
