import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { AuthGuard } from './auth/auth.guard';

import { navRoutes } from './config/navRoutes.routes';
import { NavComponent } from './core/components/nav/nav.component';
import { StartComponent } from './core/components/start/start.component';
import { UserManualComponent } from './core/components/user-manual/user-manual.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'user-manual', component: UserManualComponent },
  { path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'dashboard', component: NavComponent, children: navRoutes }, // canActivateChild: [AuthGuard], canActivate: [AuthGuard]
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
