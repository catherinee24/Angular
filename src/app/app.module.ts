import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app-routing';

import { AppComponent } from './app.component';
import { VideogameComponent } from './videogames/videogame.componet';
import { CookiesComponent } from './cookies/cookies.component';
import { PhonesComponent } from './phones/phones.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    CookiesComponent,
    PhonesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
