import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comments';
import { CommentsWithDoctorName } from 'src/app/models/comments-with-doctor';
import { CommentsService } from 'src/app/service/comments.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DoctorService } from 'src/app/service/doctor.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss']
})


export class AllCommentsComponent implements OnInit {


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
          //console.log(this.doctorComments);
          let doctorName;
          for (let i = 0; i < this.doctorComments.length; i += 1) {
            if(doctorComments[i].hide == 0){
              this.commentsWithDoctorName = new CommentsWithDoctorName(doctorComments[i].id,doctorComments[i].hide,"-", doctorComments[i].content, doctorComments[i].rating, doctorComments[i].doctor_id);
              this.extraInfoDC.push(this.commentsWithDoctorName);
            }
          }
          console.log(this.extraInfoDC);
          
          for (let i = 0; i < this.doctorComments.length; i += 1) {
            this.doctorService.getDoctorById(this.extraInfoDC[i].doctor_id)
              .subscribe(
                (doctor) => {
                  if(this.extraInfoDC[i].hide == 0){
                    this.extraInfoDC[i].doctorName = doctor.name;
                  }
                  
                }
              );

          }

        }
      );

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
