import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _tokenService = inject(TokenService)
  const router = inject(Router)
  if(_tokenService.getToken()){
    return true
  }else{
    router.navigate(['/auth/login'])
    return false
  }
};
