// import { Routes } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// export const appRoutes: Routes = [
//     {
//         path: 'signup', component: UserComponent,
//         children: [{ path: '', component: SignUpComponent }]
//     },
//     {
//         path: '', redirectTo: '/signup', pathMatch: 'full'
//     }
// ];
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
    // {
    //     path: 'signup', component: UserComponent,
    //     children: [{ path: '', component: SignUpComponent }]
    // },
    // {
    //     path: 'login', component: UserComponent,
    //     children: [{ path: '', component: SignInComponent }]
    // },
    // {
    //      path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    //    // path: 'userprofile', component: UserProfileComponent
    // },
    // {    path: '' , redirectTo:'home', pathMatch:'full'},
    // {   path : 'dashboard' , component : DashboardComponent},
    // {   path : 'dashboard' , component : DashboardComponent},

];