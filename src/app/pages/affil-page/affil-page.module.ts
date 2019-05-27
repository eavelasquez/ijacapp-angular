import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffilPageRoutingModule } from './affil-page-routing.module';
import { AffilPageComponent } from './affil-page.component';

@NgModule({
  declarations: [AffilPageComponent],
  imports: [
    CommonModule,
    AffilPageRoutingModule
  ]
})
export class AffilPageModule { }
