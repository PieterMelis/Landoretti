
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OverzichtComponent } from './overzicht/overzicht.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'overzicht', component: OverzichtComponent}
];

export const routing = RouterModule.forRoot(routes);
