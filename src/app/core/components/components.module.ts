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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRippleModule } from '@angular/material/core';
import { GetStartedRegisterComponent } from './get-started-register/get-started-register.component';
import { CommitteeComponent } from './committee/committee.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MemberComponent } from './member/member.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StartComponent,
    UserManualComponent,
    ActionsComponent,
    GetStartedRegisterComponent,
    CommitteeComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ScrollingModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  exports: [
    StartComponent,
    UserManualComponent,
    ActionsComponent,
    GetStartedRegisterComponent,
    CommitteeComponent,
    MemberComponent
  ]
})
export class ComponentsModule { }
