import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideogameComponent } from './videogames/videogame.componet';
import { Cookies } from './cookies/cookies.component';
import { PhonesComponent } from './phones/phones.component';

@NgModule({
  declarations: [AppComponent, VideogameComponent, Cookies, PhonesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
