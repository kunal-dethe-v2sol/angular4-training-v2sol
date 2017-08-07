import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class SharedService {
    onLoginEvent: EventEmitter<boolean> = new EventEmitter();
}