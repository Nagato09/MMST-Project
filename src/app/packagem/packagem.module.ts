import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PackagemComponent }  from './packagem.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ PackagemComponent],
  bootstrap:    [ PackagemComponent ]
})

export class AppModule { }
