import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { IsearchComponent } from './isearch/isearch.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NewauctionComponent } from './newauction/newauction.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    OverviewComponent,
    DetailComponent,
    IsearchComponent,
    AuctionsComponent,
    WatchlistComponent,
    NewauctionComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
