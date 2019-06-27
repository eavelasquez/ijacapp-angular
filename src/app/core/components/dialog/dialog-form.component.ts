import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunityActionService } from '../../services/community-action.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styles: []
})
export class DialogFormComponent implements OnInit {
  form: FormGroup;
  districts: any;
  constructor(private communityActionService: CommunityActionService,
              private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      code: '001',
      name: [null, [Validators.minLength(12), Validators.maxLength(78), Validators.required, Validators.pattern('[A-Z,a-z, ]*')]],
      email: [null, [Validators.minLength(16), Validators.maxLength(48), Validators.email,
        ]], // Validators.pattern('/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}')
      telephone: [null, [Validators.minLength(7), Validators.maxLength(14), Validators.pattern('-?[0-9]*(\\.[0-9]+)?')]],
      district: [null, [Validators.required]]
    });
    this.communityActionService.showDistrict().subscribe(data => {
      this.districts = data;
      console.log(this.districts);
    });
  }

  get nameForm() { return this.form.get('name'); }
  get emailForm() { return this.form.get('email'); }
  get telephoneForm() { return this.form.get('telephone'); }
  get districtForm() { return this.form.get('district'); }

  createCommunity() {
    if (this.form.invalid) { return; }
    this.form.addControl('user', new FormControl(this.authService.user._id));
    console.log('User', this.form.controls.user.value);
    this.communityActionService.registerC(this.form.value);
  }

  getErrorMessage(fieldForm: AbstractControl) {
    return fieldForm.hasError('required') ? 'Campo obligatorio'
      : fieldForm.hasError('maxlength') ? `Máximo ${fieldForm.errors.maxlength.requiredLength} caracteres`
        : fieldForm.hasError('minlength') ? `Mínimo ${fieldForm.errors.minlength.requiredLength} caracteres`
          : fieldForm.hasError('pattern') ? 'No cumple con lo requerido'
            : fieldForm.hasError('email') || fieldForm.hasError('pattern') ? 'Dirección de correo electrónica inválida'
              : '';
  }

}
