import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CommonHeaderComponent,
    LeftNavComponent,
    
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
     RouterModule
     
  ],exports:[CommonHeaderComponent,LeftNavComponent
  ]
})
export class CommonsidenavModule { }
