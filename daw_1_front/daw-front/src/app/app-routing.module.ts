import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { MedicalUnitPageComponent } from './components/medical-unit-page/medical-unit-page.component';
import { SpecificDoctorComponent } from './components/specific-doctor/specific-doctor.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { AddDoctorReviewComponent } from './components/add-doctor-review/add-doctor-review.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';
import { CrudCommentsComponent } from './components/crud-comments/crud-comments.component';
import { CrudDoctorsComponent } from './components/crud-doctors/crud-doctors.component';
import { CrudMedicalUnitsComponent } from './components/crud-medical-units/crud-medical-units.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddMedicalUnitsComponent } from './components/add-medical-units/add-medical-units.component';
import { UpdateMedicalUnitsComponent } from './components/update-medical-units/update-medical-units.component';
import { AuthGuard } from './auth.guard';
import { AuthGuardUser } from './auth.guard.user';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'doctor-review',
    component: AddDoctorReviewComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path:'doctor-details',
    component: DoctorDetailsComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path:'all-comments',
    component: AllCommentsComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path:'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path:'edit-user-profile',
    component: EditUserProfileComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path: 'main-page',
    component: MainPageComponent,
    canActivate: [AuthGuardUser]
  },
  {
  path:'doctor',
  component: DoctorPageComponent,
  canActivate: [AuthGuardUser]
  },
  {
    path:'medical-unit',
    component: MedicalUnitPageComponent,
    canActivate: [AuthGuardUser]
  },
  {
    path:'specific-doctor',
    component: SpecificDoctorComponent,
    canActivate: [AuthGuardUser]
  },
  //-------------------------------------------------------admin--------------------------------------------------------------------
  // /AddDoctorComponent
  {
    path:'admin',
    component: AdminMainPageComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'crud-comments',
    component: CrudCommentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'crud-dotors',
    component: CrudDoctorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'crud-medical-units',
    component: CrudMedicalUnitsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'crud-users',
    component: CrudUsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'update-doctor',
    component: UpdateDoctorComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-doctor',
    component: AddDoctorComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-medical-units',
    component: AddMedicalUnitsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'update-medical-units',
    component: UpdateMedicalUnitsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
