import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ToastService } from '../services/toast.service';
import { Location } from '@angular/common';

export const roleGuard: CanActivateFn = (route, state) => {
  const token = inject(TokenService)
  const location = inject(Location)
  const toastr = inject(ToastService)
  const router = inject(Router)
  const userRole = token.getRole() as string
  if(userRole && userRole==='Admin'){
    return true
  }else{
    toastr.showError('Not Authorized')
    router.navigate(['/'])
    return false
  }
};
