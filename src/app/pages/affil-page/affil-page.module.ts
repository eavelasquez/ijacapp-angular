import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AffilPageRoutingModule } from './affil-page-routing.module';
import { AffilPageComponent } from './affil-page.component';

@NgModule({
  declarations: [AffilPageComponent],
  imports: [
    CommonModule,
    AffilPageRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule
  ]
})
export class AffilPageModule { }
