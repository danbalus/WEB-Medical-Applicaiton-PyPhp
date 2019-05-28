import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { RouterModule, Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import {MedicalUnitPageComponent} from 'src/app/components/medical-unit-page/medical-unit-page.component'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-specific-doctor',
  templateUrl: './specific-doctor.component.html',
  styleUrls: ['./specific-doctor.component.scss'],
  //template: 'Example: {{medicalUnitName}}'
  //template:' <app-medical-unit-page [doctors]="doctors"></app-medical-unit-page>'
  
})
export class SpecificDoctorComponent implements OnInit {
 
  
  doctors:Array<Doctor>=new Array<Doctor>();
  fdoctors:Array<Doctor>=new Array<Doctor>();
  medicalUnitName: string;
  heroes$: Observable<Doctor[]>;
  sub: any;

  constructor(private router:Router,private doctorService:DoctorService,
    private translateService: TranslateService,private route: ActivatedRoute) {
      if(localStorage.getItem('language') == '0'){
        translateService.setDefaultLang('en');
      }else{
        translateService.setDefaultLang('ro');
      }
      this.medicalUnitName= localStorage.getItem('unitName');
      
     }

  ngOnInit() {
    //this.getAllDoctors();
    //console.log('doctors is ');
   // console.log(this.medicalUnitName);
   this.sub = this.route.params.subscribe(params => {
    this.doctors = params['doctors'];
    });
    console.log(this.doctors);
    this.filterDoctors();
  }
  getAllDoctors(){
    this.doctorService.getAllDoctors().subscribe((doctors)=>this.doctors=doctors);
  }
   filterDoctors(){
     //this.doctors.map(doctors =>{let f1 = doctors.name(doctors => doctors.medicalUnit == this.medicalUnitName)});
    // this.doctors = this.doctors.filter(x =>x.medicalUnit == this.medicalUnitName)[0];
    this.doctorService.getSpecificDoctors(this.medicalUnitName).subscribe((doctors)=>this.doctors=doctors);
    
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
