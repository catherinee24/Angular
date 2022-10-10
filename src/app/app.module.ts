import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app-routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideogameComponent } from './videogames/videogame.componet';
import { CookiesComponent } from './cookies/cookies.component';
import { PhonesComponent } from './phones/phones.component';
import { HomeComponent } from './home/home.component';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    CookiesComponent,
    PhonesComponent,
    HomeComponent,
    ExternalComponent,
  ],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
