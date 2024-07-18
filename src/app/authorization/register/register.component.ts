import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm!: FormGroup
  isSubmitted: boolean = false
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToastService,
    private router:Router
  ) { }
  ngOnInit() {
    this.buildForm()

  }
  buildForm() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      role: ['User', [Validators.required]]
    })
  }
  submitForm() {
    console.log(this.registrationForm)
    if (this.registrationForm.valid) {
      this.isSubmitted = false
      this.authService.register(this.registrationForm.value).subscribe((response) => {
        if (response.status) {
          this.toast.showSuccess(response.message)
          this.registrationForm.reset()
        } else {
          this.toast.showError(response.message)
        }
      },
        (error) => {
          this.toast.showError(error.message)
        },
        ()=>{
          this.router.navigate(['/auth/login'])
        }
      )
    }
  }
}
