import {NgModule} from '@angular/core';

import {PostsRoutes} from './posts.routes';
//import { PostsListComponent } from './list/posts-list.component';

@NgModule({
    declarations: [
        //    PostsListComponent
    ],
    imports: [
        PostsRoutes
    ],
    providers: [],
})
export class PostsModule {}
