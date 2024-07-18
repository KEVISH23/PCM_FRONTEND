import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEventsComponent } from './view-events/view-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { roleGuard } from '../core/guards/role.guard';
import { ViewParticularEventComponent } from './view-particular-event/view-particular-event.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { DashboardComponent } from '../layouts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'viewProducts',
    component:ViewEventsComponent
  },
  {
    path:'category',
    component:ViewCategoryComponent
  },
  {
    path:'addEvent',
    component:AddEventComponent,
    canActivate:[roleGuard]
  },
  {
    path:'addCategory',
    component:AddEditCategoryComponent,
    canActivate:[roleGuard]
  },
  {
    path:'event/:id',
    component:ViewParticularEventComponent
  },
  {
    path:'event/edit/:id',
    component:AddEventComponent,
    canActivate:[roleGuard]
  },
  {
    path:'category/edit/:id',
    component:AddEditCategoryComponent,
    canActivate:[roleGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
