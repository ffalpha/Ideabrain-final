import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {path:'',component:SidebarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
