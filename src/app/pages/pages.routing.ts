import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LineasComponent } from './lineas/lineas.component';
import { BlogComponent } from './blog/blog.component';
import {PostResolver} from "./blog/individual-post/post.resolver"
import { IndividualPostComponent } from './blog/individual-post/individual-post.component';
const routes: Routes = [
    {
        path: "inicio",
        component: InicioComponent
    },
    {
        path: "nosotros",
        component: NosotrosComponent
    },
    // {
    //     path: "lineas",
    //     component: LineasComponent
    // },
    {
        path: "contacto",
        component: ContactoComponent
    },
    {
        path: "diurno",
        component: BlogComponent
    },
    {
        path: "diurno/:slug",
        resolve: {
            post: PostResolver
        },
        component: IndividualPostComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [PostResolver]
})
export class PagesRoutingModule { }