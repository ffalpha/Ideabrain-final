import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QARoutingModule } from './qa-routing.module';
import { CatagoryPageComponent } from './catagory-page/catagory-page.component';
import { CatagoryCardComponent } from './catagory-page/catagory-card/catagory-card.component';


@NgModule({
  declarations: [CatagoryPageComponent, CatagoryCardComponent],
  imports: [
    CommonModule,
    QARoutingModule
  ]
})
export class QAModule { }
