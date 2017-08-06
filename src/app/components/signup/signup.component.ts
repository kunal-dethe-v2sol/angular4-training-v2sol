import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
		//this.router.navigate(['/groups']);
		//return false;
    }

}
