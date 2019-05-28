import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDetails } from 'src/app/models/user-details';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {HttpClient} from '@angular/common/http'
// class ImageSnippet {
//   constructor(public src: string, public file: File) {}
// }

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  //user:User= new User(111,"test@yahoo.com","test_password","test type",null);
  //userDetails = new UserDetails("test_nume","afectiune_test");
  sub: any;
  user: User;
  selectedFile:File= null;
 
  constructor(private router: Router, private userService: UserService, private http:HttpClient) {

  }

  ngOnInit() {
    this.getUser();

    //this.user.userDetails = this.userDetails; 

  }
  logout(){
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }
  getUser() {
    this.userService.getUserById(Number(sessionStorage.getItem('user'))).subscribe((sub) => {
    this.sub = sub;

      // console.log("aa: " + this.sub.user_details.name);
      console.log(JSON.stringify(sub));
      //this.ratings = this.user.ratings;
      //console.log("bb: " + this.ratings);
    });
  }

  onFileChanged(event) {
    console.log("am apasat pe upload"  );
    console.log(event);

    this.selectedFile = event.target.files[0];
    //const uploadData = new FormData();
    // const app = express();
    // app.use(function (req, res, next) {
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //   res.setHeader('Access-Control-Allow-Methods', 'POST');
    //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //   res.setHeader('Access-Control-Allow-Credentials', true);
    //   next();
    // });
    
  }
  processFile(imageInput: any) {
    console.log("am apasat pe buton");
    const fd = new FormData();
    fd.append('myFile', this.selectedFile, this.selectedFile.name);
    console.log(fd);
    this.http.post('..\daw_1_front\daw-front\src\assets',fd).subscribe(res => {
      console.log(res);
    });
    var reader = new FileReader();
  
  }
  
}
// update(imageInput){

// }



// processFile(imageInput: any) {
//   const file: File = imageInput.files[0];
//   const reader = new FileReader();

//   reader.addEventListener('load', (event: any) => {

//     this.selectedFile = new ImageSnippet(event.target.result, file);

//     this.imageService.uploadImage(this.selectedFile.file).subscribe(
//       (res) => {
      
//       },
//       (err) => {
      
//       })
//   });

//   reader.readAsDataURL(file);
// }