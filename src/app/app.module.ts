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
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PackagemComponent,
    ProjectmComponent,
    ContactComponent,
    NewpComponent,
    LocalpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
