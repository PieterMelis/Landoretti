import { Component, OnInit } from '@angular/core';
import {ValidationManager} from "ng2-validation-manager";
@Component({
  selector: 'app-newauction',
  templateUrl: './newauction.component.html',
  styleUrls: ['./newauction.component.scss']
})
export class NewauctionComponent implements OnInit {

  constructor() { }
 form;
 ngOnInit() {

   this.form = new ValidationManager({
     'title'        : 'required',
     'year'         : 'required|number',
     'width'        : 'required|number',
     'height'       : 'required|number',
     'depth'        : 'required|number',
     'discription'  : 'required|maxLength:2000',
     'condition'    : 'required|maxLength:2000',
     'origin'       : 'required|maxLength:2000',
     'file1'        : '',
     'file2'        : '',
     'file3'        : '',
     'min'          : 'required|number|maxLength:25',
     'max'          : 'required|number|maxLength:25',
     'buyout'       : 'required|number|maxLength:25',
     'end'          : 'required|date'


   });

   this.form.setValue('title', 'Auction title');
   this.form.setValue('year', '0000');
   this.form.setValue('width', '0000');
   this.form.setValue('height', '0000');

   this.form.setValue('depth', '0000');
   this.form.setValue('discription', 'Describe your auction as thorough as possible');
   this.form.setValue('condition', 'Whats the condition of the artwork?');
   this.form.setValue('origin', 'Whats the origin of the artwork?');

   this.form.setValue('min', '0000');
   this.form.setValue('max', '0000');
   this.form.setValue('buyout', '0000');
   this.form.setValue('end', '00/00/00');
 }

 save(){
   if(this.form.isValid()){
     alert('validation pass');
     this.form.reset();
   }
 }

}
