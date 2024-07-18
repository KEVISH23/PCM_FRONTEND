import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  userName!:string
  userRole!:string
  imageUrl:string = "http://localhost:3000"
  constructor(
    private token:TokenService,
    private authService:AuthService,
    private toast:ToastService,
    private router:Router
  ){}

  ngOnInit(){
    this.userName = this.token.getFullName() as string
    this.userRole = this.token.getRole() as string
    this.getUser()
  }
  getUser(){
    this.authService.getUser().subscribe((response)=>{
      if(response.status){
        this.imageUrl += response.data.imagePath
      }
    })
  }
  logout() {
    this.authService.logout().subscribe((response) => {
      if (response.status) {
        this.toast.showSuccess(response.message)
        this.token.removeToken()
      } else {
        this.toast.showError(response.message)
      }
    },
      (error) => {
        this.toast.showError(error.message)
      },()=>{
        this.router.navigate(['/auth/login'])
      }
    )
  }
}
