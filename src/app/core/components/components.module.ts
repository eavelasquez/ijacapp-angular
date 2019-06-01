import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { RouterModule } from '@angular/router';
// Components
import { StartComponent } from './start/start.component';
import { UserManualComponent } from './user-manual/user-manual.component';
import { ActionsComponent } from './actions/actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [StartComponent, UserManualComponent, ActionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [StartComponent, UserManualComponent, ActionsComponent]
})
export class ComponentsModule { }
