import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GroupsListComponent} from './list/groups-list.component';

const routes: Routes = [
    {path: 'groups', component: GroupsListComponent},
    {path: 'groups/:id', component: GroupsListComponent},
    //    {path: 'groups', component: GroupsListComponent, pathMatch: 'full'},
    //  { path: 'groups/create', component: GroupsCreateComponent },
    //  { path: 'groups/update', component: GroupsUpdateComponent },
    //  { path: 'groups/delete', component: GroupsDeleteComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class GroupsRoutes {}
