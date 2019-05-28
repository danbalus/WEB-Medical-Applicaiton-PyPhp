import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  loginForm:FormGroup;
  user:User;
  errorMessage:string="";

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginService) { }

  ngOnInit() {
    this.deleteStorageData();
    this.createForm();
  }
  deleteStorageData() {
    sessionStorage.clear();
    localStorage.clear();
  }

  createForm(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  login(){
      let credentials:Credentials=new Credentials(this.loginForm.value.email, this.loginForm.value.password);
      this.loginService.submitLogin(credentials)//this.loginForm.value.email,this.loginForm.value.password)
                  .subscribe(
                    ( response) => {
                                    this.user=response;
                                   if(this.user.type ==='Administrator'){
                                      sessionStorage.setItem('admin',this.user.id.toString());
                                      this.router.navigateByUrl('admin');
                                      console.log("succes: sunt admin");
                                    }
                                   else{
                                        sessionStorage.setItem('user',this.user.id.toString());
                                       this.router.navigateByUrl('main-page');
                                       console.log('succes: sunt user');
                                   }
                                    },
                    ( error )=> { this.errorMessage = "Incorrect email or password!", console.log('incorrect login')}
    );
  }

  register(){
    this.router.navigateByUrl('register');
  }
}
