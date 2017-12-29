import { Component, OnInit } from '@angular/core';
import {ValidationManager} from "ng2-validation-manager";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
 form;
 ngOnInit() {

   this.form = new ValidationManager({
     'name'        : 'required|minLength:4|maxLength:12|alphaSpace',
     'email'       : 'required|email',
     'password'    : 'required|rangeLength:8,50',
     'repassword'  : 'required|equalTo:password'
   });

   this.form.setValue('name', 'Default');
 }

 save(){
   if(this.form.isValid()){
     alert('validation pass');
     this.form.reset();
   }
 }

}
