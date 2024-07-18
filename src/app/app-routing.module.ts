import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { loginGuard } from './core/guards/login.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'auth',
    component:AuthlayoutComponent,
    loadChildren:()=>import('./authorization/authorization.module').then(m=>m.AuthorizationModule),
    canActivate:[loginGuard]
  },
  {
    path:'',
    component:LayoutsComponent,
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
