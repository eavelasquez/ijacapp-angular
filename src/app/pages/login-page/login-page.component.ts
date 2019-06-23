import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, Auth } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  hide = true;
  errorMessage: string;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(24),
        Validators.pattern('[A-Z,a-z, ,-?[0-9]*(\\.[0-9]+)?]*')]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(16),
        ]] // Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{6,16}$')
    });
  }

  get usernameForm() { return this.form.get('username'); }
  get passwordForm() { return this.form.get('password'); }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.navigateTo();
    }
  }

  public async login() {
    if (this.form.invalid) { return ; }
    const auth: Auth = {
      username: this.usernameForm.value,
      password: this.passwordForm.value
    };
    try {
      await this.authService.userLogin(auth).then(value => {
        value.subscribe(() => this.navigateTo() );
      });
    } catch (e) {
      this.errorMessage = 'Hubo un error al iniciar sesión.';
      console.error('¡No inició sesión!/n', e);
      this.openSnackBar();
    }
  }

  public navigateTo(url?: string) {
      url = url || 'dashboard';
      this.router.navigate([url], { replaceUrl: true });
  }

  openSnackBar() {
    this.snackBar.open(this.errorMessage, '', {
      duration: 2000,
    });
  }

  getErrorMessageUsername() {
    return this.usernameForm.hasError('required') ? 'Campo obligatorio'
      : this.usernameForm.hasError('maxlength') ? 'Máximo 24 caracteres'
        : this.usernameForm.hasError('minlength') ? 'Mínimo 4 caracteres'
          : this.usernameForm.hasError('pattern') ? 'Sin caracteres especiales'
            : '';
  }

  getErrorMessagePassword() {
    return this.passwordForm.hasError('required') ? 'Campo obligatorio'
      : this.passwordForm.hasError('maxlength') ? 'Máximo 12 caracteres'
        : this.passwordForm.hasError('minlength') ? 'Mínimo 6 caracteres'
          : this.passwordForm.hasError('pattern') ? 'Al menos un número, una mayúscula y una minúscula. Sin caracteres especiales'
            : '';
  }
}
