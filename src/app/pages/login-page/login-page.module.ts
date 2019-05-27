import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { LoginPageRoutingModule } from './login-page-routing.module';
// Pages - Components
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../core/components/components.module';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ComponentsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule
  ]
})
export class LoginPageModule { }
