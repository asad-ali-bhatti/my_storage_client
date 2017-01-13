import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StorageModule } from "./storage/storage.module";
import { routings } from "./app.routes";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StorageModule,
    routings
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
