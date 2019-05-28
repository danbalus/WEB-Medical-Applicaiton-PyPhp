import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { Comments } from 'src/app/models/comments';
import { OnDestroy } from "@angular/core";


@Component({
  selector: 'app-add-doctor-review',
  templateUrl: './add-doctor-review.component.html',
  styleUrls: ['./add-doctor-review.component.scss']
})
export class AddDoctorReviewComponent implements OnInit {

  
  templateUnchecked = false;
  templateChecked = true;
  template = true;
  doctor:Doctor;
  constructor(private router:Router,private doctorService:DoctorService) { }

  ngOnInit() {
 
  }
  
  // ngOnDestroy() {
  //   this.doctor.unsubscribe();
  // }
  update(comment: string) {
    console.log('ngModel value', this.template);
    console.log(comment);
    //let doctorAux:Doctor=new Doctor(null,null,null,null,null,null);
    let commentModel:Comments = new Comments(99999,comment,Number(this.template), Number(localStorage.getItem('doctor')),0);
    this.doctorService.getDoctorById(Number(localStorage.getItem('doctor')))
    .subscribe((doctor) => {
      this.doctor = doctor;
      console.log(JSON.stringify(Number(localStorage.getItem('doctor'))));

      console.log(JSON.stringify(doctor));
      let allComments = this.doctor.comments;
      allComments.push(commentModel);
      doctor.comments = allComments;
      this.doctor = doctor;
      console.log(JSON.stringify(doctor));
      console.log(JSON.stringify("##LUNGIME##" + doctor.comments.length));
      this.doctor.comments[0].content = doctor.comments[doctor.comments.length-1].content;
      this.doctor.comments[0].rating = doctor.comments[doctor.comments.length-1].rating;
     // console.log(JSON.stringify(doctor));
    });

    this.doctorService.addDoctor(this.doctor)
    .subscribe(
      (response)=>{console.log(response)},
      (error)=>console.log('incorrect update ')
    );
  }
  logout(){
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }

}
