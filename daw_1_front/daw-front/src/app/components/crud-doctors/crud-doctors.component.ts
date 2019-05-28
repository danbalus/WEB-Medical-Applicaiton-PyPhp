import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';

import { TranslateService } from '@ngx-translate/core';
import { CommentsService } from 'src/app/service/comments.service';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-crud-doctors',
  templateUrl: './crud-doctors.component.html',
  styleUrls: ['./crud-doctors.component.scss']
})
export class CrudDoctorsComponent implements OnInit {

  doctors:Array<Doctor>=new Array<Doctor>();
  //comments:Array<Comments>=new Array<Comments>();
 // gridDoctors=new Array();
  ratingAverage = 0;

  constructor(private router:Router, private doctorService:DoctorService, private commentsService:CommentsService,
    private translateService: TranslateService) {
      if(localStorage.getItem('language') == '0'){
        translateService.setDefaultLang('en');
      }else{
        translateService.setDefaultLang('ro');
      }
     }

  ngOnInit() {
    console.log('nr of doctors:');
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.doctorService.getAllDoctors()
      .subscribe(
        (doctors) => {
        this.doctors = doctors,
        
          console.log('nr of doctors: ' + this.doctors.length);
        }
      );

  }


  update(id:any){
    console.log("----------------");
    localStorage.setItem("doctor", id);
    this.router.navigate(['/update-doctor'])
   //this.router.navigate(['/user', 5])
  }

  delete(id:any){
    console.log("----------------");
    this.doctorService.deleteDoctor(id).subscribe();
    window.location.reload();
  }
  add(){
    this.router.navigate(['/add-doctor'])
  }
  

  switchLanguage(language: string) {
    if(language == "en"){
      localStorage.setItem('language', '0');
    }else{
      localStorage.setItem('language', '1');
    }
    this.translateService.use(language);
  }
  logout(){
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }
}
