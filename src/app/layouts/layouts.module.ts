import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    AuthlayoutComponent,
    LayoutsComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    SharedModule
]
})
export class LayoutsModule { }
