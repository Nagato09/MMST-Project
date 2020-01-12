import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PackagemComponent } from './packagem/packagem.component';
import { ProjectmComponent } from './projectm/projectm.component';
import { ContactComponent } from './contact/contact.component';
import { NewpComponent } from './projectm/newp/newp.component';
import { LocalpComponent } from './projectm/localp/localp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PackagemComponent,
    ProjectmComponent,
    ContactComponent,
    NewpComponent,
    LocalpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
