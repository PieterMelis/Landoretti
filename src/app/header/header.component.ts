import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  uno: boolean = true;
  en: boolean = false;
  tre: boolean = false;
     login1() {
       this.uno = !this.uno;
     }
     login2() {
       this.en = !this.en;
     }
     logout() {
       this.tre = !this.tre;
       this.uno = this.uno;
     }

     ngOnInit(){

     }

}
