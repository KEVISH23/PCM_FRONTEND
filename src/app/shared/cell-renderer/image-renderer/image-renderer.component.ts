import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-renderer',
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss']
})
export class ImageRendererComponent implements ICellRendererAngularComp {
  params:any
  imageUrl:string = "http://localhost:3000"
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
    this.imageUrl += params.data.imagePath
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }

}
