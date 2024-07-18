import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { EventService } from 'src/app/core/services/event.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ActionCellRendererComponent } from 'src/app/shared/cell-renderer/action-cell-renderer/action-cell-renderer.component';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent {
  constructor(
    private eventService:EventService,
    private toast:ToastService,
    private router:Router
  ){}
  ngOnInit(){
    this.getAllCategories()
  }
  rowData!:any
  colDef:ColDef[] = [
    {field:'_id',flex:1},
    {field:'categoryName',flex:1},
    {field:'Actions',flex:1,cellRenderer:ActionCellRendererComponent,cellRendererParams: {
      onEdit: (id: string) => this.editEvent(id),
      onDelete: (id: string) => this.deleteEvent(id),
    },}
  ]

  getAllCategories(){
    this.eventService.getAllCategory().subscribe((response)=>{
      if(response.status){
        this.rowData = response.data
      }
    })
  }
  editEvent(id: string) {
    this.router.navigate([`/category/edit/${id}`]);
  }
  deleteEvent(id: string) {
    this.eventService.deleteCategory(id).subscribe(
      (response) => {
        if (response.status) {
          this.toast.showSuccess(response.message);
          this.getAllCategories()
        } else {
          this.toast.showError(response.message);
        }
      },
      (error) => {
        this.toast.showError(error.message);
      }
    );
  }
}
