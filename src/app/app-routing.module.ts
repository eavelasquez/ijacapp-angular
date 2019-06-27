import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Components
import { NavComponent } from './core/components/nav/nav.component';
import { StartComponent } from './core/components/start/start.component';
import { UserManualComponent } from './core/components/user-manual/user-manual.component';
// Config - Routes
import { navRoutes } from './config/navRoutes.routes';
// Guards
import { AuthGuard } from './core/services/auth/auth.guard';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'login', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: 'dashboard', component: NavComponent, children: navRoutes, canActivateChild: [AuthGuard], canActivate: [AuthGuard] },
  { path: 'user-manual', component: UserManualComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
