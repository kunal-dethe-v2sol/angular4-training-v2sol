import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//import { MessagesListComponent } from './list/messages-list.component';  

const routes: Routes = [
    //  { path: 'messages', component: MessagesListComponent },
    //  { path: 'messages/create', component: MessagesCreateComponent },
    //  { path: 'messages/update', component: MessagesUpdateComponent },
    //  { path: 'messages/delete', component: MessagesDeleteComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class MessagesRoutes {}
