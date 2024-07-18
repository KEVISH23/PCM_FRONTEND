import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() disabled:boolean = false
  @Input() title!:string
  @Input() count!:number
  @Input() routingLink!:string
  @Input() linkTitle!:string
}
