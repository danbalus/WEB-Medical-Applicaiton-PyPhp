import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comments';
import { CommentsWithDoctorName } from 'src/app/models/comments-with-doctor';
import { CommentsService } from 'src/app/service/comments.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-crud-comments',
  templateUrl: './crud-comments.component.html',
  styleUrls: ['./crud-comments.component.scss']
})
export class CrudCommentsComponent implements OnInit {

  doctorComments: Array<Comments> = new Array<Comments>();
  commentsWithDoctorName: any;

  extraInfoDC: Array<CommentsWithDoctorName> = new Array<CommentsWithDoctorName>();
 
  constructor(private router: Router, private commentService: CommentsService,
    private translateService: TranslateService, private doctorService: DoctorService) {
    if (localStorage.getItem('language') == '0') {
      translateService.setDefaultLang('en');
    } else {
      translateService.setDefaultLang('ro');
    }

  }

  ngOnInit() {
    this.getAllComments();
    //this.makeForGrid();
    //console.log('doctors is ' + this.doctors.length);
  }
  getAllComments() {

    this.commentService.getAllComments()

      .subscribe(
        (doctorComments) => {
          this.doctorComments = doctorComments,
            console.log('nr of comments: ' + this.doctorComments.length);
           // console.log( this.doctorComments);
          //console.log(this.doctorComments);
          let doctorName;
          for (let i = 0; i < this.doctorComments.length; i += 1) {

            this.commentsWithDoctorName = new CommentsWithDoctorName(doctorComments[i].id,doctorComments[i].hide,"-", doctorComments[i].content, doctorComments[i].rating, doctorComments[i].doctor_id);
            this.extraInfoDC.push(this.commentsWithDoctorName);
          }
          for (let i = 0; i < this.doctorComments.length; i += 1) {
            this.doctorService.getDoctorById(this.extraInfoDC[i].doctor_id)
              .subscribe(
                (doctor) => {
                  this.extraInfoDC[i].doctorName = doctor.name;
                }
              );

          }
         // console.log( this.extraInfoDC);

        }
      );

  }
  toggleComment(id:number, hideValue: number){
   console.log(hideValue);
   console.log(id);
   if(hideValue == 0){
     hideValue = 1;
    this.commentService.updateComment(id, hideValue).subscribe();
   }else{
     hideValue=0;
    this.commentService.updateComment(id, hideValue).subscribe();
   }
   //this.router.navigate(['../crud-comments'])
   window.location.reload();
  }
  
  switchLanguage(language: string) {
    if (language == "en") {
      localStorage.setItem('language', '0');
    } else {
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
