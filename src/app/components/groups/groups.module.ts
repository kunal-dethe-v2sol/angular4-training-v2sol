import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {GroupsRoutes} from './groups.routes';
import {GroupsListComponent} from './list/groups-list.component';

@NgModule({
    declarations: [
        GroupsListComponent
    ],
    imports: [
        CommonModule,
        GroupsRoutes
    ],
    providers: [],
})
export class GroupsModule {}
