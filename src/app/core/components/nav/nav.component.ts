import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavRoute } from 'src/app/config/navRoutes.routes';
import { AuthService } from '../../services/auth/auth.service';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isOpen = true;
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  public toggleSideNav() {
    this.isOpen = !this.isOpen;
  }

  public getNavigationItems(): NavRoute[] {
      return this.navigationService.getNavigationItems();
  }

  public getSelectedNavigationItem(): NavRoute {
      return this.navigationService.getSelectedNavigationItem();
  }

  public logout() {
    this.authService.userLogout();
    this.router.navigate(['login'], { replaceUrl: true });
  }

}
