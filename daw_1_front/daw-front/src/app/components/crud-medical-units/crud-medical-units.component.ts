import { Component, OnInit } from '@angular/core';
import { MedicalUnit } from 'src/app/models/medical-unit';
import { Router } from '@angular/router';
import { MedicalUnitService } from 'src/app/service/medical-unit.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-crud-medical-units',
  templateUrl: './crud-medical-units.component.html',
  styleUrls: ['./crud-medical-units.component.scss']
})
export class CrudMedicalUnitsComponent implements OnInit {

  medicalUnits:Array<MedicalUnit>=new Array<MedicalUnit>();

  constructor(private router:Router, private medicalUnitService:MedicalUnitService,
    private translateService: TranslateService) {
      if(localStorage.getItem('language') == '0'){
        translateService.setDefaultLang('en');
      }else{
        translateService.setDefaultLang('ro');
      }
     }

  ngOnInit() {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.medicalUnitService.getAllMedicalUnits()
      .subscribe(
        (medicalUnits) => {
        this.medicalUnits = medicalUnits,
          console.log('nr of medicalUnits: ' + this.medicalUnits.length);
        }
      );

  }


  update(id:any){
    console.log("----------------");
    localStorage.setItem("medical-units", id);
    this.router.navigate(['/update-medical-units'])
   //this.router.navigate(['/user', 5])
  }

  delete(id:any){
    console.log("----------------");
    this.medicalUnitService.deleteMedicalUnits(id).subscribe();
    window.location.reload();
  }

  add(){
    this.router.navigate(['/add-medical-units'])
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
