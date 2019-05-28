import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Credentials } from 'src/app/models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl="http://localhost:8000/api/login";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'}); 

  constructor(private http:HttpClient) { }
  submitLogin(credentials:Credentials): Observable<User>{
    return this.http.post<any>(this.loginUrl,credentials,{headers:this.headers});
  }

}
