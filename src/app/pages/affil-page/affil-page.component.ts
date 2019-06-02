import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-affil-page',
  templateUrl: './affil-page.component.html',
  styleUrls: ['./affil-page.component.scss']
})
export class AffilPageComponent implements OnInit {
  form: FormGroup;
  commit: FormControl = new FormControl('');
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(36), Validators.pattern('')]],
      surname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(36), Validators.pattern('')]],
      document: this.fb.group({
        type: [null, Validators.required],
        number: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('')]]
      }),
      dateBorn: [null, Validators.required],
      address: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(96), Validators.pattern('')]],
      gender: [null, Validators.required],
      telephone: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(12), Validators.pattern('')]],
      occupation: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(48), Validators.pattern('')]]
    });
  }

  get name() { return this.form.get('name'); }
  get surname() { return this.form.get('surname'); }
  get document() { return this.form.get('document') as FormGroup; }
  get dateBorn() { return this.form.get('dateBorn'); }
  get address() { return this.form.get('address'); }
  get gender() { return this.form.get('gender'); }
  get telephone() { return this.form.get('telephone'); }
  get occupation() { return this.form.get('occupation'); }

  onSubmit() {
    if (this.form.invalid) { return ; }
    this.form.addControl('commit', this.commit);
  }

  onClear() { this.form.reset(); }

}
