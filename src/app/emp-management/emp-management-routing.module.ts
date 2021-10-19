import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { EmployeeComponent } from '../employee/employee.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { EmpManagementComponent } from './emp-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path:'',
      component:EmpManagementComponent,
      children:[
        {
          path:'',
          component:HomeComponent
        } ,
        {
          path: 'userprofile', component: UserProfileComponent
        // path: 'userprofile', component: UserProfileComponent
     },
     {
      path: 'createproject', component: EmployeeComponent
    // path: 'userprofile', component: UserProfileComponent
 },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpManagementRoutingModule { }
