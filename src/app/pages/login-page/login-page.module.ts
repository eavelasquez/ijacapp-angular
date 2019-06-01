import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { LoginPageRoutingModule } from './login-page-routing.module';
// Pages - Components
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../core/components/components.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
