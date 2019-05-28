import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Doctor } from 'src/app/models/doctor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  
  addForm:FormGroup;
  constructor(private fb:FormBuilder, private doctorService:DoctorService, private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.addForm = this.fb.group({
      name: ["", [Validators.required]],
      specialization: ["", [Validators.required]],
      graduationYear: ["", [Validators.required]],

    });
  }

  add(){

    // let uuser: any;
 
     let doctor:Doctor=new Doctor(9999,this.addForm.value.name, this.addForm.value.specialization,this.addForm.value.graduationYear, "user.jpg",null,null );
  
    this.doctorService.addDoctor(doctor)
    .subscribe(
      (response)=>{
        //this.router.navigateByUrl('crud-dotors');
        console.log(doctor)
    },
      (error)=>{
        console.log('incorrect update');
        console.log(doctor);
    }
      
    );
    this.router.navigate(['/crud-dotors'])
  }
  logout(){
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }
}
