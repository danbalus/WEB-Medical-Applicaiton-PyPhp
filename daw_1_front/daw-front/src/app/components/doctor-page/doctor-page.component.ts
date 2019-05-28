import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';

import { TranslateService } from '@ngx-translate/core';
import { CommentsService } from 'src/app/service/comments.service';
import { Comments } from 'src/app/models/comments';


@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss']
})
export class DoctorPageComponent implements OnInit {


  doctors:Array<Doctor>=new Array<Doctor>();
  //comments:Array<Comments>=new Array<Comments>();
  gridDoctors=new Array();
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
    this.getAllDoctors();
    //this.makeForGrid();
    //console.log('doctors is ' + this.doctors.length);
  }
  getAllDoctors() {
    this.doctorService.getAllDoctors()
      .subscribe(
        (doctors) => {
        this.doctors = doctors,
        //console.log(this.doctors);
          console.log('nr of doctors: ' + this.doctors.length);
          for (let i = 0; i < this.doctors.length; i += 3) {

            this.gridDoctors.push(
              { items: this.doctors.slice(i, i + 3) },
              //console.log(this.gridDoctors)
            );

          }
        }
      );

  }


  update(id:any){
    console.log("----------------");
    localStorage.setItem("doctor",id);
    this.router.navigate(['/doctor-review'])
   //this.router.navigate(['/user', 5])
  }

  updateForDoctorDetails(id:any){
    console.log("----------------");
    localStorage.setItem("doctor",id);
    this.router.navigate(['/doctor-details'])
   //this.router.navigate(['/user', 5])
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
