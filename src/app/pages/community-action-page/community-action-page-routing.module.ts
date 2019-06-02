import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityActionPageComponent } from './community-action-page.component';

const routes: Routes = [{ path: '', component: CommunityActionPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityActionPageRoutingModule { }
