import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import {HttpClientModule} from "@angular/common/http";
import {ElevesModule} from "./eleves/eleves.module";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ElevesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
