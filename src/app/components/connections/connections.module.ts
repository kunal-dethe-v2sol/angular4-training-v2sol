import {NgModule} from '@angular/core';

import {ConnectionsRoutes} from './connections.routes';
//import { ConnectionsListComponent } from './list/connections-list.component';

@NgModule({
    declarations: [
        //    ConnectionsListComponent
    ],
    imports: [
        ConnectionsRoutes
    ],
    providers: [],
})
export class ConnectionsModule {}
