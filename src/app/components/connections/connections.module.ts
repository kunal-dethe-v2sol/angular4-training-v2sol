import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ConnectionsRoutes} from './connections.routes';
//import { ConnectionsListComponent } from './list/connections-list.component';

@NgModule({
    declarations: [
        //    ConnectionsListComponent,
    ],
    imports: [
        CommonModule,
        ConnectionsRoutes,
    ],
    providers: [],
})
export class ConnectionsModule {}
