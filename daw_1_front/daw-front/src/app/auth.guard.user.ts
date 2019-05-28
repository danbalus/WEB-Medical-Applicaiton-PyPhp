import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUser implements CanActivate {
 
  constructor(private loginService: LoginService, private router: Router) {  
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url:string=state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if(sessionStorage.getItem('user')){
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['']);
    return false;
  }
}
