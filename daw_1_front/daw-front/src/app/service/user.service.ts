import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = "http://localhost:8000/api/users";
  private usersUrlPyBackend = "http://localhost:7000/users";

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'}); 

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(this.usersUrl,{headers:this.headers});
  }
  addUser(User:User):Observable<User>{
    return this.http.post<User>(this.usersUrl,User,{headers:this.headers});
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.usersUrlPyBackend+'/'+id,{headers:this.headers});
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.usersUrl+'/'+id,{headers:this.headers});
  }
  updateUser(User:User):Observable<User>{
    return this.http.put<User>(this.usersUrl,User,{headers:this.headers});
  }

}
