import { Component } from '@angular/core';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  userRole!:string
  isProductCollapsed = true;
  isCategoryCollapsed = true;
  constructor(
    private token:TokenService,
  ){}

  ngOnInit(){
    this.userRole = this.token.getRole() as string
  }
  toggleProducts(){
    this.isProductCollapsed = !this.isProductCollapsed
  }
  toggleCategories(){
    this.isCategoryCollapsed = !this.isCategoryCollapsed
  }
}
