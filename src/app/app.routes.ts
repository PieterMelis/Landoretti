
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AuctionsComponent } from './auctions/auctions.component';
import { DetailComponent } from './detail/detail.component';
import { IsearchComponent } from './isearch/isearch.component';
import { NewauctionComponent } from './newauction/newauction.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { WatchlistComponent } from './watchlist/watchlist.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auctions', component: AuctionsComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'isearch', component: IsearchComponent},
  {path: 'newauction', component: NewauctionComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'register', component: RegisterComponent}
];

export const routing = RouterModule.forRoot(routes);
