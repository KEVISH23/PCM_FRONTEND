import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup
  isSubmitted:boolean = false
  constructor(
    private fb:FormBuilder,
    private toast:ToastService,
    private authService:AuthService,
    private router:Router,
    private tokenService:TokenService
  ) { }
  ngOnInit(){
    this.buildForm()

  }
  buildForm(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  submitForm(){
    this.isSubmitted = true
    if (this.loginForm.valid) {
      this.isSubmitted=false
      this.authService.login(this.loginForm.value).subscribe((response) => {
        if (response.status) {
          this.toast.showSuccess(response.message)
          this.loginForm.reset()
          this.tokenService.addToken(response.data)
        } else {
          this.toast.showError(response.message)
        }
      },
        (error) => {
          this.toast.showError(error.message)
        },()=>{
          this.router.navigate(['/'])
        }
      )
    }
  }
}
