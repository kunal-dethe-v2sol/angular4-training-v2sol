import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'linkcxo-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('into feed');
    }

}
