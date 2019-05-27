import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) {}

  ngOnInit() {
      this.errorMessage = '';
      // if (this.authService.isLogged()) {
      //     this.navigateTo();
      // }
  }

  public async login(email: string, password: string) {
    this.router.navigate(['/dashboard']);
      // try {
      //     const url = (await this.authService.mockLogin(
      //         email,
      //         password,
      //     )) as string;
      //     this.navigateTo(url);
      // } catch (e) {
      //     this.errorMessage = 'Wrong Credentials!';
      //     console.error('Unable to Login!\n', e);
      // }
  }

  public navigateTo(url?: string) {
      url = url || 'nav';
      this.router.navigate([url], { replaceUrl: true });
  }

}
