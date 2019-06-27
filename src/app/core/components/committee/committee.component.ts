import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommitteeService } from '../../services/committee/committee.service';
import { AffilService } from '../../services/affil/affil.service';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {
  form: FormGroup;
  isOptional = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  affiliatesCommit = [];

  affiliates = [];
  constructor(private fb: FormBuilder, private committeeService: CommitteeService, private affilService: AffilService) {
    affilService.showAffils().subscribe((value: any) => {
      console.log('Afiliados', value);
      this.affiliates = value._id;
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      code: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern('-?[0-9]*(\\.[0-9]+)?')]],
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern('[A-Z,a-z, ]*')]],
      description: [null, [Validators.minLength(12), Validators.maxLength(72)]]
    });
  }

  createCommittee() {
    return this.committeeService.createCommittee(this.form.value);
  }

  // createCommitteeAffils() {
  //   this.createCommittee().then(value => {
  //     this.committeeService.registerAffiliates(value, this.affiliatesCommit);
  //   });
  // }

  get codeForm() { return this.form.get('code'); }
  get nameForm() { return this.form.get('name'); }
  get descriptionForm() { return this.form.get('description'); }

  getErrorMessage(fieldForm: AbstractControl) {
    return fieldForm.hasError('required') ? 'Campo obligatorio'
      : fieldForm.hasError('maxlength') ? `Máximo ${fieldForm.errors.maxlength.requiredLength} caracteres`
        : fieldForm.hasError('minlength') ? `Mínimo ${fieldForm.errors.minlength.requiredLength} caracteres`
          : fieldForm.hasError('pattern') ? 'No cumple con lo requerido: números o letras'
            : '';
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.affiliatesCommit);
      console.log(this.affiliates);
    }
  }

  onClear() {
    this.form.reset();
  }

}
