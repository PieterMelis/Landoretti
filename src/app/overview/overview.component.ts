import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  animated: boolean = false;

     clickMe() {
       this.animated = !this.animated;
     }
     ngOnInit(){

     }
     text:any = {
    Days: "d",
    Hours: "u",
    Minutes: "m",
  };
}
