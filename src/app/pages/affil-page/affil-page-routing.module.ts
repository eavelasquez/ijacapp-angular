import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffilPageComponent } from './affil-page.component';

const routes: Routes = [{ path: '', component: AffilPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffilPageRoutingModule { }
