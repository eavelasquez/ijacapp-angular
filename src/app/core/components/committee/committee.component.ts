import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {CommitteeService} from '../../services/committee/committee.service';
import {AffilService} from '../../services/affil/affil.service';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {

  form: FormGroup;
  isOptional = true;
  affiliatesList = [];
  affiliatesCommitList = [];
  constructor(private fb: FormBuilder, private committeeService: CommitteeService, private affilService: AffilService) {
    affilService.showAffils().subscribe((value: any) => {
      for (const affil of value) {
        this.affiliatesList.push(affil);
      }
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
    return this.committeeService.createCommittee(this.form.value).then(() => {
      this.onClear();
    });
  }

  createCommitteeAffils() {
    const result: any = this.affiliatesCommitList.map(obj => obj._id);
    console.log('error', this.form.value);
    this.form.addControl('affiliates', this.fb.array(result));
    console.log(this.form.value);
    this.createCommittee().then(value => {
      console.log(value);
    });
  }

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
      console.log(this.affiliatesList);
      console.log(this.affiliatesCommitList);
    }
  }

  onClear() { this.form.reset(); }

}
