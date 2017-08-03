import {NgModule} from '@angular/core';

import {ArticlesRoutes} from './articles.routes';
//import { ArticlesListComponent } from './list/articles-list.component';

@NgModule({
    declarations: [
        //    ArticlesListComponent
    ],
    imports: [
        ArticlesRoutes
    ],
    providers: [],
})
export class ArticlesModule {}
