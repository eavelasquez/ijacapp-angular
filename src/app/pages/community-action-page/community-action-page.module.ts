import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MatTabsModule } from '@angular/material/tabs';
import { ComponentsModule } from '../../core/components/components.module';
// Components
import { CommunityActionPageComponent } from './community-action-page.component';
// Routing
import { CommunityActionPageRoutingModule } from './community-action-page-routing.module';

@NgModule({
  declarations: [CommunityActionPageComponent],
  imports: [CommonModule, CommunityActionPageRoutingModule, MatTabsModule, ComponentsModule]
})
export class CommunityActionPageModule { }
