import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  //private doctorsUrl = "http://localhost:8080/doctors";
  private doctorsUrlPythonBackend = "http://localhost:7000/doctors";
  private doctorsUrl = "http://localhost:8000/api/doctors";
  

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'}); 

  constructor(private http:HttpClient) { }

  getAllDoctors():Observable<Array<Doctor>>{
    return this.http.get<Array<Doctor>>(this.doctorsUrl,{headers:this.headers});
  }
  getSpecificDoctors(name:string):Observable<Array<Doctor>>{
    return this.http.get<Array<Doctor>>(this.doctorsUrl +'/'+ name,{headers:this.headers});
  }
  getDoctorById(id:number):Observable<Doctor>{
    return this.http.get<Doctor>(this.doctorsUrl+'/'+id,{headers:this.headers});
  }
  updateDoctor(Doctor:Doctor, id:number):Observable<Doctor>{
    return this.http.put<Doctor>(this.doctorsUrlPythonBackend +'/'+id,Doctor,{headers:this.headers});
  }

  deleteDoctor(id:number):Observable<Doctor>{
    return this.http.delete<Doctor>(this.doctorsUrlPythonBackend+'/'+id,{headers:this.headers});
  }
  addDoctor(doctor:Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(this.doctorsUrlPythonBackend,doctor,{headers:this.headers});
  }
  // getAllComments():Observable<Array<Doctor>>{
  //   return this.http.get<Array<Doctor>>(this.doctorsUrl,{headers:this.headers});
  // }
}
