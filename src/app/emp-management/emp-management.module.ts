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
import { EmpCrudComponent } from './emp-crud/emp-crud.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeeService } from '../shared/employee.service';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    EmpManagementComponent,
    HomeComponent,
    UserProfileComponent,EmployeeComponent, EmpCrudComponent, EmpViewComponent
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
    MatListModule,FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  entryComponents:[EmpCrudComponent],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,EmployeeService],
})
export class EmpManagementModule { }
