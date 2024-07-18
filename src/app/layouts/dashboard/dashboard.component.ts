import { Component } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  counts:{
    userCount:number,
    productsCount:number,
    categoriesCount:number
  } =  {
    userCount:0,
    productsCount:0,
    categoriesCount:0
  }
  constructor(
    private eventService:EventService
  ){}
  ngOnInit(){
    this.getCounts()
  }
  getCounts(){
    this.eventService.getCounts().subscribe((response)=>{
      if(response.status){
        this.counts = response.data
      }
    })
  }
}
