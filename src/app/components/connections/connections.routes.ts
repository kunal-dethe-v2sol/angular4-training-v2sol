import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//import { ConnectionsListComponent } from './list/connections-list.component';  

const routes: Routes = [
    //  { path: 'connections', component: ConnectionsListComponent },
    //  { path: 'connections/create', component: ConnectionsCreateComponent },
    //  { path: 'connections/update', component: ConnectionsUpdateComponent },
    //  { path: 'connections/delete', component: ConnectionsDeleteComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ConnectionsRoutes {}
