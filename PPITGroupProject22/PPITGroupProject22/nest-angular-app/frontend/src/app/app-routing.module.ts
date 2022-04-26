import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { shopRegisterComponent } from './shop-register/shop-register.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import {staffRegisterComponent} from './staff-register/staff-register.component';

const routes: Routes = [
  {
    path: 'stafflogin',
    component: StaffLoginComponent
  },
  {
    path: 'staffregister',
    component: staffRegisterComponent
  },
  {
    path: 'shopregister',
    component: shopRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
