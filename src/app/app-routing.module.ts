import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: '', redirectTo: 'eleve/all', pathMatch: 'full'},
  {
    path:'eleve', loadChildren:()=>import('./eleves/eleves.module')
      .then(m=>m.ElevesModule)
  },
  {
    path:'**', component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
