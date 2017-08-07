import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {GroupsRoutes} from './groups.routes';
import {GroupsListComponent} from './list/groups-list.component';
import {GroupsService} from './groups.service';

@NgModule({
    declarations: [
        GroupsListComponent
    ],
    imports: [
        CommonModule,
        GroupsRoutes
    ],
    providers: [
        GroupsService
    ]
})
export class GroupsModule {}
