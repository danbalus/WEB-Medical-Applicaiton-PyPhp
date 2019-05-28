import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { MedicalUnitService } from 'src/app/service/medical-unit.service';
import { MedicalUnit } from 'src/app/models/medical-unit';

@Component({
  selector: 'app-update-medical-units',
  templateUrl: './update-medical-units.component.html',
  styleUrls: ['./update-medical-units.component.scss']
})
export class UpdateMedicalUnitsComponent implements OnInit {


  addForm:FormGroup;
  medicalUnit:MedicalUnit;
  oldMedicalUnit:MedicalUnit;
  mmedicalUnit: MedicalUnit;
 constructor(private fb:FormBuilder, private medicalUnitService:MedicalUnitService, private router:Router,
     private activatedRoute:ActivatedRoute) { }

 ngOnInit() {
   this.activatedRoute.params.subscribe(params=>{
     const id=params.id;
     if(localStorage.getItem("medical-units")){
     this.medicalUnitService.getMedicalUnitById(Number(localStorage.getItem("medical-units"))).subscribe(medicalUnit=>{this.medicalUnit=medicalUnit;
     this.createForm(this.medicalUnit);
     //console.log(medicalUnit)
     //console.log(medicalUnit)
     });
     }
   });
   //this.createForm(this.doctor);
 }

 createForm(medicalUnit:MedicalUnit) {
   this.addForm = this.fb.group({
     // id: [ '',[ Validators.required]],
     // email: ['' , [Validators.required]],
     // password: ['', [Validators.required]],
     // name: ['' , [Validators.required]],
     // typeAccount: ['' , [Validators.required]],
     // age: ['' , [Validators.required]],
     name: [medicalUnit.name , [Validators.required]],
     location: [medicalUnit.location , [Validators.required]],
     type: [medicalUnit.type , [Validators.required]],
   });
 }

 update(){
  
   this.medicalUnitService.getMedicalUnitById(Number(localStorage.getItem("medical-units")))
   .subscribe((medicalUnit)=>
   {this.oldMedicalUnit=medicalUnit,
    console.log("OLD: "),
    console.log(this.oldMedicalUnit);

    if(this.oldMedicalUnit.doctors == undefined){
      let medicalUnit:MedicalUnit=new MedicalUnit(this.oldMedicalUnit.id,this.addForm.value.name, this.addForm.value.location,this.addForm.value.type,"logo.jpg",null,0,0);
      this.mmedicalUnit = medicalUnit; 
    }
     else{
      let medicalUnit:MedicalUnit=new MedicalUnit(this.oldMedicalUnit.id,this.addForm.value.name, this.addForm.value.location,this.addForm.value.type,"logo.jpg",this.oldMedicalUnit.doctors,0,0);
      this.mmedicalUnit = medicalUnit; 
    }  
    this.medicalUnitService.updateMedicalUnit(this.mmedicalUnit,this.medicalUnit.id)
    .subscribe(
      (response)=>{this.router.navigateByUrl('crud-medical-units');console.log(this.mmedicalUnit)},
      (error)=>{console.log('incorrect update');;console.log(this.mmedicalUnit)}
      
      
    );
  }
   );
 
  
    
 
   this.router.navigate(['crud-medical-units'])
 }
 logout(){
  //localStorage.removeItem('user');
  localStorage.clear();
  sessionStorage.clear();
}

}
