import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagemComponent } from './packagem/packagem.component';
import { ProjectmComponent } from './projectm/projectm.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'packagemanager', component: PackagemComponent },
  { path: 'projectmanager', component: ProjectmComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
