// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';


// import { FormsModule } from '@angular/forms';


// import{appRoutes} from './routes'
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
// import { RouterModule } from '@angular/router';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { UserService } from './shared/user.service';

// //
// import { AuthGuard } from './auth/auth.guard';
// import { AuthInterceptor } from './auth/auth.interceptor';

// @NgModule({
//   declarations: [
//     AppComponent,
//     UserComponent,
//     SignUpComponent,
    // UserProfileComponent,
//     SignInComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     RouterModule.forRoot(appRoutes),
//     // [HttpClientModule,  ]
//     HttpClientModule
    
//   ],
//   providers: [AuthInterceptor,AuthGuard,UserService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { MatSidenavModule } from '@angular/material/sidenav'; import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
// import { appRoutes } from './routes';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
// import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonsidenavModule } from './commonsidenav/commonsidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    //UserProfileComponent,
    SignInComponent,
    EmployeeComponent,
    HeaderComponent,
    // SidenavComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    CommonsidenavModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
