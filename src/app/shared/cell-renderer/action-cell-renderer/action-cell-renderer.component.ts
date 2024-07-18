import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-action-cell-renderer',
  templateUrl: './action-cell-renderer.component.html',
  styleUrls: ['./action-cell-renderer.component.scss']
})
export class ActionCellRendererComponent implements ICellRendererAngularComp{
  params:any
  userRole!:string
  path:boolean = false
  constructor(
    private token:TokenService,
    private route:ActivatedRoute
  ){}
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
    this.userRole = this.token.getRole() as string
    this.path = this.route.snapshot.routeConfig?.path === 'category'
  }
  refresh(): boolean {
    return true
  }

  onEdit(){
    this.params.onEdit(this.params.data._id)
  }
  onView(){
    this.params.onView(this.params.data._id)
  }
  onRegister(){
    this.params.onRegister(this.params.data._id)
  }
  onDelete(){
    this.params.onDelete(this.params.data._id)
  }



}
