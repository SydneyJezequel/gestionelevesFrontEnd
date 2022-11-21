import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EallComponent} from "./eall/eall.component";
import {EaddComponent} from "./eadd/eadd.component";
import {EupdateComponent} from "./eupdate/eupdate.component";

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  { path:'all',component: EallComponent },
  { path:'edit/:id',component: EupdateComponent},
  { path:'add',component: EaddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElevesRoutingModule { }
