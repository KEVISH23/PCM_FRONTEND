import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { ActionCellRendererComponent } from './cell-renderer/action-cell-renderer/action-cell-renderer.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ImageRendererComponent } from './cell-renderer/image-renderer/image-renderer.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BackBtnComponent,
    ActionCellRendererComponent,
    DatatableComponent,
    ImageRendererComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    // AgGridModule,
    RouterModule
  ],
  exports:[
    DatatableComponent,
    BackBtnComponent,
    CardComponent
  ]
})
export class SharedModule { }
