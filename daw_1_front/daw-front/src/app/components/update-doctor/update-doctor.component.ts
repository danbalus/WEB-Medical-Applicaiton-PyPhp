import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { MedicalUnit } from 'src/app/models/medical-unit';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})
export class UpdateDoctorComponent implements OnInit {

  addForm:FormGroup;
   doctor:Doctor;
   oldDoctor:Doctor;
   ddoctor:Doctor;
  constructor(private fb:FormBuilder, private doctorService:DoctorService, private router:Router,
      private activatedRoute:ActivatedRoute) { }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      const id=params.id;
      if(localStorage.getItem("doctor")){
      this.doctorService.getDoctorById(Number(localStorage.getItem("doctor"))).subscribe(doctor=>{this.doctor=doctor;
      this.createForm(this.doctor);
      //console.log(doctor)
      });
      }
    });
    //this.createForm(this.doctor);
  }

  createForm(doctor:Doctor) {
    this.addForm = this.fb.group({
      // id: [ '',[ Validators.required]],
      // email: ['' , [Validators.required]],
      // password: ['', [Validators.required]],
      // name: ['' , [Validators.required]],
      // typeAccount: ['' , [Validators.required]],
      // age: ['' , [Validators.required]],
      name: [doctor.name , [Validators.required]],
      specialization: [doctor.specialization , [Validators.required]],
      graduationYear: [doctor.graduationYear , [Validators.required]],
    });
  }

  update(){
    this.doctorService.getDoctorById(Number(localStorage.getItem("doctor")))
    .subscribe((doctor)=>
    {this.oldDoctor=doctor,
      console.log("OLD: "),
      console.log(this.oldDoctor);
      
      let dooctor:Doctor=new Doctor(this.oldDoctor.id, this.addForm.value.name, this.addForm.value.specialization,this.addForm.value.graduationYear,"user.jpg",this.oldDoctor.medical_units,this.oldDoctor.comments);
      this.ddoctor = dooctor;
      this.doctorService.updateDoctor(this.ddoctor,this.doctor.id )
      .subscribe(
        (response)=>{this.router.navigateByUrl('crud-dotors');console.log(this.ddoctor)},
        (error)=>{console.log('incorrect update');;console.log(this.ddoctor)}
      );
    }
    );

  
 
    this.router.navigate(['crud-dotors'])
    
  }
    // if(this.oldDoctor.medical_units == null && this.oldDoctor.comments == null){
    //     let doctor:Doctor=new Doctor(this.addForm.value.name, this.addForm.value.specialization,this.addForm.value.graduationYear,"user.jpg",null,null);
    //     ddoctor = doctor;
    // }
    // if(this.oldDoctor.medical_units == null && this.oldDoctor.comments != null){
    //     let doctor:Doctor=new Doctor(this.addForm.value.name, this.addForm.value.specialization,this.addForm.value.graduationYear,"user.jpg",null,this.oldDoctor.comments);
    //     ddoctor = doctor;
    //   }
    // if(this.oldDoctor.medical_units != null && this.oldDoctor.comments == null){
    //   let doctor:Doctor=new Doctor(this.addForm.value.name, this.addForm.value.specialization,this.addForm.value.graduationYear,"user.jpg",this.oldDoctor.medical_units,null);
    //   ddoctor = doctor;
    // }
    // if(this.oldDoctor.medical_units != null && this.oldDoctor.comments != null){
    //   let doctor:Doctor=new Doctor(this.addForm.value.name, this.addForm.value.specialization,this.addForm.value.graduationYear,"user.jpg",this.oldDoctor.medical_units,this.oldDoctor.comments);
    //   ddoctor = doctor;
    //   }
    //medicalUnits = this.oldDoctor.medical_units;
  logout(){
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }
}
