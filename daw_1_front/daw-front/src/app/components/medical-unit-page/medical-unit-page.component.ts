import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalUnitService } from 'src/app/service/medical-unit.service';
import { MedicalUnit } from 'src/app/models/medical-unit';
import { TranslateService } from '@ngx-translate/core';
import { SpecificDoctorComponent } from 'src/app/components/specific-doctor/specific-doctor.component'
import { Doctor } from 'src/app/models/doctor';
import { CommentsService } from 'src/app/service/comments.service';
import { MyChartsData } from 'src/app/models/charts-data';
import { Chart } from 'chart.js';
import { google } from '@agm/core/services/google-maps-types';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-medical-unit-page',
  templateUrl: './medical-unit-page.component.html',
  styleUrls: ['./medical-unit-page.component.scss'],
  //template: '<app-specific-doctor [medicalUnitName]= "toSend"></app-specific-doctor>'
  //template: '{{toSend}}'
  //template: '<app-specific-doctor>{{toSend}}</app-specific-doctor>'

})
export class MedicalUnitPageComponent implements OnInit {
  @Input()
  doctors: Array<Doctor> = new Array<Doctor>();
  @Input()
  testString: string = "################## test string #####################";

  medicalUnits: Array<MedicalUnit> = new Array<MedicalUnit>();
  chartDataArray: Array<MyChartsData> = new Array<MyChartsData>();
  specificCommentsArray: Array<Comments> = new Array<Comments>();
  aux: any = -1;
  myChart: any;
  //toSend:string = 'Spitalul Clinic Municipal';
  title: string = 'My first AGM project';
  lat: number = 46.770439;
  lng: number = 23.591423;
  //currentLat:46.7743411
  //currentLong:23.6074797
  lat2: number = 46.740439;
  lng2: number = 23.951423;
  lat3: number = 46.780439;
  lng4: number = 23.531423;
  currentLat: string;
  currentLong: string;
  map: any;
  marker: any;
  sumMedicalUnitRating: number;
  medicalUnitRating: number;
  labelData = new Array();
  ratingData = new Array();
  chartData: any;
  constructor(private router: Router, private medicalUnitService: MedicalUnitService,
    private commentsService: CommentsService, private translateService: TranslateService) {
    if (localStorage.getItem('language') == '0') {
      translateService.setDefaultLang('en');
    } else {
      translateService.setDefaultLang('ro');
    }
  }

  ngOnInit() {
    this.getAllMedicalUnits();
    this.findMe()
    this.getDataForMappingChart()
    this.makeChart()
  }
  getDataForMappingChart() {
    console.log("3");
    this.medicalUnitService.getMedicalUnitChartData()
    .subscribe(
      (chartDataArray) => {
        this.chartDataArray = chartDataArray;
        console.log(this.chartDataArray); 
         
    for (let i = 0; i < this.chartDataArray.length; i += 1) {
      this.labelData.push(this.chartDataArray[i].medical_unit_name)
    }
    console.log(this.labelData);

    for (let i = 0; i < this.chartDataArray.length; i += 1) {
      this.ratingData.push(this.chartDataArray[i].medical_unit_rating)
    }
    console.log(this.ratingData); 
    this.myChart = new Chart('canvas', {
      animationEnabled: true,
      type: 'line',
      data: {
        labels: this.labelData,
        datasets: [{
          label: 'doctor ratings',
          data: this.ratingData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: ['#3cba9f',
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });     
      }
    );
    //throw new Error("Method not implemented.");
  }

  findMe() {
    console.log("2");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
  }
  makeChart() {
    console.log("4");


    
  }

  getAllMedicalUnits() {
    console.log("1");
    this.medicalUnitService.getAllMedicalUnits()
      .subscribe(
        (medicalUnits) => {
          this.medicalUnits = medicalUnits;
        });


 
  }



  switchLanguage(language: string) {
    if (language == "en") {
      localStorage.setItem('language', '0');
    } else {
      localStorage.setItem('language', '1');
    }
    this.translateService.use(language);
  }

  setUnitName(unitName: string) {

    localStorage.setItem('unitName', unitName);

  }
  logout() {
    //localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
  }
}
