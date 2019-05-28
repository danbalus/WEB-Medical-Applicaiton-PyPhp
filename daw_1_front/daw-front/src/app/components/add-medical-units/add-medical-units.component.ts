import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicalUnit } from 'src/app/models/medical-unit';
import { MedicalUnitService } from 'src/app/service/medical-unit.service';

@Component({
  selector: 'app-add-medical-units',
  templateUrl: './add-medical-units.component.html',
  styleUrls: ['./add-medical-units.component.scss']
})
export class AddMedicalUnitsComponent implements OnInit {

  addForm:FormGroup;
  constructor(private fb:FormBuilder, private medicalUnitService:MedicalUnitService, private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.addForm = this.fb.group({
      name: ["", [Validators.required]],
      location: ["", [Validators.required]],
      type: ["", [Validators.required]],

    });
  }

  add(){



    let medicalUnit:MedicalUnit=new MedicalUnit(9999,this.addForm.value.name, this.addForm.value.type,this.addForm.value.location, "logo.jpg",null,0,0);
  
    this.medicalUnitService.addMedicalUnit(medicalUnit)
    .subscribe(
      (response)=>{
        //this.router.navigateByUrl('crud-dotors');
        console.log(medicalUnit)
    },
      (error)=>{
        console.log('incorrect update');
        console.log(medicalUnit);
    }
      
    );
    this.router.navigate(['/crud-medical-units'])
  }
  logout(){
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }
}
