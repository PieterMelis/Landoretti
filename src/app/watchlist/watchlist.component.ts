import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  text:any = {

  Days: "d",
  Hours: "u",
  Minutes: "m",
  Seconds: "s"
  };
}
