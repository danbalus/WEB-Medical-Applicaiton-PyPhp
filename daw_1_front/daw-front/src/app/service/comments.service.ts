import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  
  //private doctorsUrl = "http://localhost:8080/doctors";
  private commentsUrl          = "http://localhost:8000/api/comments";
  private commentsUrlPyBackend = "http://localhost:7000/comments";

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'}); 

  constructor(private http:HttpClient) { }


  getAllComments():Observable<Array<Comments>>{
    return this.http.get<Array<Comments>>(this.commentsUrl,{headers:this.headers});
  }
  getAllCommentsbyId(id:number):Observable<Array<Comments>>{
    return this.http.get<Array<Comments>>(this.commentsUrl+'/'+id, {headers:this.headers});
  }
  // getDoctorById(id:number):Observable<Doctor>{
  //   return this.http.get<Doctor>(this.doctorsUrl+'/'+id,{headers:this.headers});
  // }

  updateComment(id:number,hide:number):Observable<Comments>{
    //console.log(this.commentsUrlPyBackend+'/'+id+'/'+hide);
    
    return this.http.put<Comments>(this.commentsUrlPyBackend+'/'+id+'/'+hide,{headers:this.headers});
  }
  getSpecificCommentsbyDoctorId(doctor_id:number):Observable<Array<Comments>>{
    return this.http.get<Array<Comments>>(this.commentsUrlPyBackend+'/'+doctor_id, {headers:this.headers});
  }
}
