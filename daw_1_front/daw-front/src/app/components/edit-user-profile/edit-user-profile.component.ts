import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/models/user-details';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { analyzeAndValidateNgModules } from '@angular/compiler';
//import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
  
})
export class EditUserProfileComponent implements OnInit {

 
  //user:User= new User(111,"test@yahoo.com","test_password","test type",null);
  //userDetails = new UserDetails("test_nume","afectiune_test");
  sub:any;
  aux:any;
  user:User;
  editUserForm:FormGroup;
  nullHelp:Boolean = false;
  affectionEnum = ['Acute stress disorder', 'Anxiety disorders', 'Allergic disorders', "Bipolar disorders",
  'Depressive disorders',
  'Hearing disorders',
  'Neurological disorder',
  'Sleep disorders'];
affectionDefault:String = "";
x:String="---";

  constructor(private fb:FormBuilder, private router:Router, private userService:UserService) { 
    
  }

  ngOnInit() {
    this.getUser();
    this.createForm();
   // this.createSelectOptions();
  }
  createSelectOptions() {
    this.editUserForm = this.fb.group({
      countryControl: ['Acute stress disorder']
    });
  }

  createForm() {
    // if(this.nullHelp){ 
    //   this.affectionDefault = this.sub.user_details.affection;
    //   console.log("Caca macasdsd");

    // }else{
    //   this.affectionDefault = "Select one from the list";
    //   console.log("Caca macasdsd eslse"); 

    // }
    this.editUserForm = this.fb.group({
     // id: [ "",[ Validators.required]],
      name: ["" , [Validators.required]],
      email: ["" , [Validators.required]],
      password: ["" , [Validators.required]],
      passwordConfirmation: ["" , [Validators.required]],
     
      affection: [this.affectionEnum[0]] //["" , [Validators.required]],
      
      //countryControl: ['Canada']
    });
  }
  logout(){
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }
  update(){
    // let moviee: any;
  
     let userDetails:UserDetails = new UserDetails(Number(sessionStorage.getItem('user')),null,this.editUserForm.value.name, this.editUserForm.value.affection );
     let user:User = new User(Number(sessionStorage.getItem('user')), this.editUserForm.value.email, this.editUserForm.value.password,this.sub.type,userDetails);
     console.log(JSON.stringify(user));
     user.userDetails = userDetails;
    // let movie:Movie=new Movie(this.addForm.value.id,this.addForm.value.name, this.addForm.value.genre,this.addForm.value.title,this.addForm.value.rating,null,null);
 
    // if(user.email=="" ||user.password=="" ||user.userDetails.name=="" ){
    //   this.userService.getUserById(Number(localStorage.getItem('user')))
    //   .subscribe((user)=>{
    //     this.user=user;
    //     console.log(JSON.stringify(user) + "------------");
    //     console.log("------------");

    //   });
    //   if(user.email != ""){
    //     user.email = this.editUserForm.value.email;
    //     //user = this.aux;
    //   }
    //   if(user.password != ""){
    //     user.password = "1234";
    //     //user = this.aux;
    //   }
    //   if(user.userDetails.name != ""){
    //     let userDetails2:UserDetails;
    //     userDetails2.name = this.editUserForm.value.userDetails.name;
    //     userDetails2.user_id = user.id;
    //     userDetails2.affection = this.editUserForm.value.userDetails.affection;
    //     user.userDetails  = userDetails2;
    //     //user = this.aux;
    //   }
    // }
    this.userService.addUser(user)
    .subscribe(
      (response)=>{this.router.navigateByUrl('user-profile'); console.log(user)},
      (error)=>console.log('incorrect update')
    );
  }
 getUser(){
  var newSub = {
    user_details:{name:""},
    property2: ''
 };
        this.userService.getUserById(Number(sessionStorage.getItem('user'))).subscribe((sub)=>{this.sub=sub;
        if(this.sub.user_details == null) {
          console.log("Caca maca");
         
          newSub.user_details.name = "Please complete data";
          this.sub=newSub;
          //this.sub.user_details = "for_null_load";//pt a nu crapa pe front
         // this.sub.user_details. = "WRITE YOUR NAME HERE";
          //this.sub.user_details.name = "WRITE YOUR NAME HERE";
        }else{
          this.nullHelp = false;
        }
       // console.log("aa: " + this.sub.user_details.name);
        console.log(JSON.stringify(sub));
        //this.ratings = this.user.ratings;
        //console.log("bb: " + this.ratings);
      });
      }
      
      
}
