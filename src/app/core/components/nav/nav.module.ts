import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
// Components
import { NavComponent } from './nav.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NavComponent,
    NavToolbarComponent,
    NavMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule
  ]
})
export class NavModule { }
