import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevesRoutingModule } from './eleves-routing.module';
import { EaddComponent } from './eadd/eadd.component';
import { EupdateComponent } from './eupdate/eupdate.component';
import { EallComponent } from './eall/eall.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    EaddComponent,
    EupdateComponent,
    EallComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ElevesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ElevesModule { }
