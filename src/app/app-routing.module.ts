import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   {path:"",component:HomeComponent},
  {path:"auth",loadChildren:()=>import("./auth/auth.module").then(m=>m.AuthModule)},
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
