//Importar el modulo del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { VideogameComponent } from './videogames/videogame.componet';
import { CookiesComponent } from './cookies/cookies.component';
import { PhonesComponent } from './phones/phones.component';

// Array de configuracion de las rutas

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cookie', component: CookiesComponent },
  { path: 'videogame', component: VideogameComponent },
  { path: 'phones', component: PhonesComponent },
  { path: '**', component: HomeComponent },
];

// Expoortar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
