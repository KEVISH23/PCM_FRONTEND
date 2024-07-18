import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ViewEventsComponent } from './view-events/view-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewParticularEventComponent } from './view-particular-event/view-particular-event.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';


@NgModule({
  declarations: [
    ViewEventsComponent,
    AddEventComponent,
    ViewParticularEventComponent,
    AddEditCategoryComponent,
    ViewCategoryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
