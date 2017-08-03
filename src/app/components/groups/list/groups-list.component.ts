import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'linkcxo-groups-list',
    templateUrl: './groups-list.component.html',
    styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

    public ownGroups = [
        {
            "uuid":"1",
            "name":"My First Group"
        }
    ];

    constructor() {}

    ngOnInit() {
//        getList: []
        
    }

}
