import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RcenterRoutingModule } from './rcenter-routing.module';
import { RccenterhomeComponent } from './rccenterhome/rccenterhome.component';


@NgModule({
  declarations: [RccenterhomeComponent],
  imports: [
    CommonModule,
    RcenterRoutingModule
  ]
})
export class RcenterModule { }
