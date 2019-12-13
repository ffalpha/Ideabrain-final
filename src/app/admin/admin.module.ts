import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [AdminhomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
