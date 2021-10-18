import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
        path: 'signup', component: UserComponent,
         children: [{ path: '', component: SignUpComponent }]
   },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
         path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
       // path: 'userprofile', component: UserProfileComponent
    },
    {    path: '' , redirectTo:'home', pathMatch:'full'},
    {   path : 'dashboard' , component : DashboardComponent},
  {   path : 'dashboard' , component : DashboardComponent},
  {path:'empmanage', loadChildren: ()=> import('./emp-management/emp-management.module').then( m => m.EmpManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
