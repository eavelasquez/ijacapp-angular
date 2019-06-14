import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, Auth } from '../../config/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  get usernameForm() { return this.form.get('username'); }
  get passwordForm() { return this.form.get('password'); }

  ngOnInit() {
      this.errorMessage = '';
      // if (this.authService.isLogged()) {
      //     this.navigateTo();
      // }
  }

  public async login() {
    const auth: Auth = {
      username: this.form.value.username,
      password: this.form.value.password
    };
    await this.authService.login(auth).then((res) => {
      this.router.navigate(['/dashboard']);
    });
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

  getErrorMessage() {
    return this.usernameForm.hasError('required') ? 'You must enter a value' :
        this.passwordForm.hasError('email') ? 'Not a valid email' :
            '';
  }

}
