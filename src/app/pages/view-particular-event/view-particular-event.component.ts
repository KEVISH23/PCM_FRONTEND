import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { EventService } from 'src/app/core/services/event.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-view-particular-event',
  templateUrl: './view-particular-event.component.html',
  styleUrls: ['./view-particular-event.component.scss']
})
export class ViewParticularEventComponent {
  imagePath:string = "http://localhost:3000"
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private eventService:EventService,
    private toast:ToastService,
    private token:TokenService
  ){}

  id!:string
  eventDetails:any
  userRole!:string

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id') as string
    this.getParticularProduct(this.id)
    this.userRole = this.token.getRole() as string
  }

  getParticularProduct(id:string){
    this.eventService.getParticularEvent(id).subscribe((response)=>{
      if(response.status){
        this.eventDetails = response.data[0]
        this.imagePath += response.data[0].imagePath  //  /public/image.jpg
      }
    })
  }


}
