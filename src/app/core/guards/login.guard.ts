import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Location } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  const _tokenService = inject(TokenService)
  const location = inject(Location)
  if(_tokenService.getToken()){
    location.back()
    return false
  }
  return true
};
