import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { PagesModule } from './pages/pages.module';
import { RoutingModule } from './app.routing';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShellModule,
    PagesModule,
    RoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
