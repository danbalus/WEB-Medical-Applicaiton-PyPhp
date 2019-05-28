import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { TranslateService } from '@ngx-translate/core';
import { CommentsService } from 'src/app/service/comments.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.scss']
})
export class CrudUsersComponent implements OnInit {

  users:Array<User>=new Array<User>();

  constructor(private router:Router, private userService:UserService, private commentsService:CommentsService,
    private translateService: TranslateService) {
      if(localStorage.getItem('language') == '0'){
        translateService.setDefaultLang('en');
      }else{
        translateService.setDefaultLang('ro');
      }
     }

  ngOnInit() {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.userService.getAllUsers()
      .subscribe(
        (users) => {
        this.users = users,
          console.log(users);
        }
      );

  }


  delete(id:any){
    //console.log("----------------");
    //this.router.navigate(['/crud-users']);
    this.userService.deleteUser(id).subscribe();
    window.location.reload();
   //this.router.navigateByUrl('admin/users');
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
