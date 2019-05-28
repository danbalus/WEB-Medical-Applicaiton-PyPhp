import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { MedicalUnitPageComponent } from './components/medical-unit-page/medical-unit-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Material } from './material/material';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpecificDoctorComponent } from './components/specific-doctor/specific-doctor.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { AddDoctorReviewComponent } from './components/add-doctor-review/add-doctor-review.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';
import { CrudMedicalUnitsComponent } from './components/crud-medical-units/crud-medical-units.component';
import { CrudDoctorsComponent } from './components/crud-doctors/crud-doctors.component';
import { CrudCommentsComponent } from './components/crud-comments/crud-comments.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddMedicalUnitsComponent } from './components/add-medical-units/add-medical-units.component';
import { UpdateMedicalUnitsComponent } from './components/update-medical-units/update-medical-units.component';

import { AgmCoreModule } from '@agm/core';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DoctorPageComponent,
    MedicalUnitPageComponent,
    SpecificDoctorComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    AddDoctorReviewComponent,
    AllCommentsComponent,
    DoctorDetailsComponent,
    AdminMainPageComponent,
    CrudMedicalUnitsComponent,
    CrudDoctorsComponent,
    CrudCommentsComponent,
    CrudUsersComponent,
    UpdateDoctorComponent,
    AddDoctorComponent,
    AddMedicalUnitsComponent,
    UpdateMedicalUnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Material,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: '--------------------------------------------------------------------------------------------------------------'
    }),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
