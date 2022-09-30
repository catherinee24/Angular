import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideogameComponent } from './videogames/videogame.componet';
import { Cookies } from './cookies/cookies.component';
import { PhonesComponent } from './phones/phones.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    Cookies,
    PhonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
