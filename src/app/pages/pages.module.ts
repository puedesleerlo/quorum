import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages.routing';
import { MiembroDialogComponent } from './nosotros/miembro-dialog/miembro-dialog.component';
import { LineasComponent } from './lineas/lineas.component';
import { LineasDialogComponent } from './inicio/lineas-dialog/lineas-dialog.component';
import { ContactoComponent, FormSendComponent } from './contacto/contacto.component';
import { ShellModule } from '../shell/shell.module';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';
import { BlogComponent } from './blog/blog.component';
import { WordpressService } from './blog/wordpress.service';
import { HttpClientModule } from '@angular/common/http';
import { IndividualPostComponent } from './blog/individual-post/individual-post.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MaterialModule,
    PagesRoutingModule,
    ShellModule,
    AngularFireFunctionsModule,
    HttpClientModule
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'us-central1' },
    WordpressService
  ],
  declarations: [InicioComponent, FormSendComponent, NosotrosComponent, MiembroDialogComponent, LineasComponent, LineasDialogComponent, ContactoComponent, BlogComponent, IndividualPostComponent],
  entryComponents: [MiembroDialogComponent, FormSendComponent, LineasDialogComponent]
})
export class PagesModule { }
