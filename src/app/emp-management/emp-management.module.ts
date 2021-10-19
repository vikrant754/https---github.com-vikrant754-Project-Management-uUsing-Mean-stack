import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpManagementRoutingModule } from './emp-management-routing.module';
import { EmpManagementComponent } from './emp-management.component';
import { CommonsidenavModule } from '../commonsidenav/commonsidenav.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { EmployeeComponent } from '../employee/employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpManagementComponent,
    HomeComponent,
    UserProfileComponent,EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmpManagementRoutingModule,
    CommonsidenavModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,FormsModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard],
})
export class EmpManagementModule { }
