import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SearchComponent } from './search/search.component';
import { QueryResolver } from './search/query.resolver';

const routes: Routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    } ,
    {
        path: "search/:query",
        component: SearchComponent,
        resolve: {
            query: QueryResolver
        }
    } 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [QueryResolver]
})
export class RoutingModule { }