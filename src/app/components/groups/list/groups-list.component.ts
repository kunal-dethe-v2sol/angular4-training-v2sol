import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Group} from './../group';
import {GroupsService} from './../groups.service';

@Component({
    selector: 'linkcxo-groups-list',
    templateUrl: './groups-list.component.html',
    styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

    //Variables
    public ownGroups = [];
    public joinedGroups = [];
    public trendingGroups = [];
    public group: Group[] = [];
    public id = 0;

    //Constructor parameters
    static get parameters() {
        return [
            ActivatedRoute,
            GroupsService
        ];
    }

    //Constructor
    constructor(
        private _route,
        private _groupsService) {


    }

    //Angular Hooks
    ngOnInit() {
        console.log('into groups');
        this._route.params.subscribe(params => {
            if (typeof params.id == 'string') {
                this.id = params['id'];
                this.detail(this.id);
            } else {
                this.list('own');
                this.list('joined');
                this.list('trending');
            }
        });
    }

    //Custom Methods
    list(type) {
        this._groupsService
            .list(type)
            .subscribe(
            response => {
                if (type == 'own') {
                    this.ownGroups = response;
                }
                else if (type == 'joined')
                    this.joinedGroups = response;
                else if (type == 'trending')
                    this.trendingGroups = response;
            },
            error => {
                console.log('error: ', error);
            });
    }

    detail(id) {
        this._groupsService
            .detail(id)
            .subscribe(
            response => {
                this.group = response;
            },
            error => {
                console.log('error: ', error);
            });
    }

    delete(type, id) {
        this._groupsService
            .delete(id)
            .subscribe(
            response => {
                this.list(type);
            },
            error => {
                console.log('error: ', error);
            });
    }
}
