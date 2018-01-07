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
     'name'        : 'required|minLength:4|maxLength:12',
     'email'       : 'required|email',
     'password'    : 'required|rangeLength:8,50',
     'repassword'  : 'required|equalTo:password',
     'adress'      : 'required|maxLength:50',
     'phone'       : 'required|maxLength:50|pattern:[0-9]+[ ]+[0-9]+[ ]+[0-9]+[ ]+[0-9][0-9]',
     'zip'         : 'required|minLength:4|maxLength:12|number',
     'city'        : 'required|maxLength:25',
     'account'     : 'required|pattern:[0-9]+[ ]+[0-9]+[ ]+[0-9]+[ ]+[0-9][0-9]',
     'vat'         : 'required|pattern:[0-9]+[ ]+[0-9]+[ ]+[0-9]+[ ]+[0-9][0-9]',
     'payment'     : 'required|maxLength:200'


   });

   this.form.setValue('name', 'Studio 6');
   this.form.setValue('email', 'name@provider.com');
   this.form.setValue('password', 'Samsamsam');
   this.form.setValue('repassword', 'Samsamsam');

   this.form.setValue('adress', 'Zuidstraat 15 C4');
   this.form.setValue('phone', '00 000 00 00');
   this.form.setValue('zip', '8500');
   this.form.setValue('city', 'Oostende');
   this.form.setValue('account', '00 000 00 00');
   this.form.setValue('vat', '00 000 00 00');
   this.form.setValue('payment', 'Lorem ipsum');
 }

 save(){
   if(this.form.isValid()){
     alert('validation pass');
     this.form.reset();
   }
 }

}
