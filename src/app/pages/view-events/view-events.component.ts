import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { EventService } from 'src/app/core/services/event.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ActionCellRendererComponent } from 'src/app/shared/cell-renderer/action-cell-renderer/action-cell-renderer.component';
import { ImageRendererComponent } from 'src/app/shared/cell-renderer/image-renderer/image-renderer.component';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss'],
})
export class ViewEventsComponent {
  constructor(
    private eventService: EventService,
    private toast: ToastService,
    private router: Router
  ) {}
  private params:any
  categories:any = []
  rowData: any;
  colDef: ColDef[] = [
    { field: 'title', flex: 1 },
    { field: 'description', flex: 1 },
    { field: 'price', flex: 1 },
    { field: 'categoryName', flex: 1 },
    {field:'Image',cellRenderer:ImageRendererComponent,flex:1},
    {
      field: 'Actions',
      flex: 2,
      cellRenderer: ActionCellRendererComponent,
      cellRendererParams: {
        onEdit: (id: string) => this.editEvent(id),
        onView: (id: string) => this.viewEvent(id),
        onDelete: (id: string) => this.deleteEvent(id),
      },
    },
  ];
  priceRangeFilter(event:any){
    if(event.value !== "select"){
      this.params = {
        ...this.params,
        priceRange:event.value
      }   
    }else{
      this.params = {}
    }
    this.getAllEvents(this.params)
    
  }
  getSearchValue(event:any){
    this.params = {
      ...this.params,
      search:event.value
    }
    this.getAllEvents(this.params)
  }
  categoryNameFilter(event:any){
    if(event.value !== "select"){
      this.params = {
        ...this.params,
        categoryName:event.value
      }   
    }else{
      this.params = {}
    }
    this.getAllEvents(this.params)
  }
  resetFilters(priceRange:any,categoryName:any,search:any){
    priceRange.value = 'select';
    categoryName.value = 'select'
    search.value = ''
    this.getAllEvents({})
  }
  ngOnInit() {
    this.getAllEvents(this.params);
    this.getAllCategories()
  }
  editEvent(id: string) {
    this.router.navigate([`/event/edit/${id}`]);
  }
  viewEvent(id: string) {
    this.router.navigate([`/event/${id}`]);
  }
  deleteEvent(id: string) {
    this.eventService.deleteEvent(id).subscribe(
      (response) => {
        if (response.status) {
          this.getAllEvents({});
          this.toast.showSuccess(response.message);
        } else {
          this.toast.showError(response.message);
        }
      },
      (error) => {
        this.toast.showError(error.message);
      }
    );
  }
  getAllEvents(params:any) {
    this.eventService.getAllProducts(params).subscribe((response) => {
      if (response.status) {
        this.rowData = response.data;
      }
    });
  }

  getAllCategories(){
    this.eventService.getAllCategory().subscribe((response)=>{
      if(response.status){
        this.categories = response.data
      }
    })
  }
}
