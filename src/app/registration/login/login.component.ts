import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forms!:FormGroup

  constructor(private http:HttpClient,private fb:FormBuilder,private router:Router) { 
    this.forms= this.fb.group({
      login_email:[''],
      login_pass:['']
    })
  }
  submitdata(){
    console.log('sdfghj')
    var data:any = this.forms.value
    var dat = {
      "login_user": data.login_email,
      "login_password": data.login_pass }
      console.log(dat)
  }

  ngOnInit(): void {
  }

}
