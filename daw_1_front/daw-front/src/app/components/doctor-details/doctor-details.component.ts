import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import { CommentsService } from 'src/app/service/comments.service';
import { Comments } from 'src/app/models/comments';
import { TranslateService } from '@ngx-translate/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

  constructor(private doctorService:DoctorService, private commentsService:CommentsService,
    private translateService: TranslateService) { 
    if(localStorage.getItem('language') == '0'){
      translateService.setDefaultLang('en');
    }else{
      translateService.setDefaultLang('ro');
    }
   

 
  }
  MyArrayType = Array<{ratingsNote: number, styleStrings: string}>(
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
    {ratingsNote: 0, styleStrings: ""},
  );
stylee:String = "style="
  ratingAverage:number = 0;
  // ten:String="";
  // nine:String="";
  // eight:String="";
  // seven:String="";
  // six:String="";
  // five:String="";
  // four:String="";
  // three:String="";
  // two:String="";
  // one:String="";
  //ratingsNote: number[] = [0,0,0,0,0,0,0,0,0,0];
  //styleStrings: String[] = ["","","","","","","","","",""];
  

  //comments:Array<Comments>=new Array<Comments>();
  ngOnInit() {
    var id;
    id = localStorage.getItem('doctor');
    console.log(id);
    this.getAllCommentbyId(id);
  }
  getAllCommentbyId(id:number) {
    var sum = 0;
    var nrOfRatings = 0;
    this.commentsService.getAllCommentsbyId(id)
      .subscribe(
        (comments) => {
        //this.comments = comments,
        console.log(comments);
        //var lengthC = Object.keys(comments).length;
       // console.log('nr of comments: ' + lengthC);
        //console.log(comments[0]);
          for (let i = 0; i < comments.length; i +=1) {
            sum = sum + comments[i].rating;
            //this.ratingsNote[comments[i].rating] ++;
            this.MyArrayType[comments[i].rating].ratingsNote ++;
            console.log('sum ' + sum);
            if(comments[i].rating != 0){
              nrOfRatings ++;
            }            
          }
          for (let i = 0; i < 10; i +=1) {//{'width':'100%'}
            //var aux = this.ratingsNote[i] / nrOfRatings * 100; 
            var aux = this.MyArrayType[i].ratingsNote / nrOfRatings * 100; 
            //this.styleStrings[i] = "{'width': '" + aux + "%'}";
            this.MyArrayType[i].styleStrings = "style=" + "{'width': '" + aux + "%'}";
          }
          console.log(this.MyArrayType);
          //console.log(this.ratingsNote);
          this.ratingAverage = sum / comments.length;
          this.ratingAverage = Math.floor(this.ratingAverage);
          console.log('ratingAverage ' + this.ratingAverage);

        }
      );
      //console.log('ratingAverage ' + this.ratingAverage);

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
