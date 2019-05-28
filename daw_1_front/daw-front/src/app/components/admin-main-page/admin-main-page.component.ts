import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {


  currentDate:any;

  
  constructor() { }

  ngOnInit() {
    this.getDate();
  }
  getDate(){
     this.currentDate = new Date();
    }
    logout(){
      //localStorage.removeItem('user');
      localStorage.clear();
      sessionStorage.clear();
    }
}
