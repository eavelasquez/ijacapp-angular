import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {CommitteeService} from '../../services/committee/committee.service';

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
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  constructor(private fb: FormBuilder, private committeeService: CommitteeService) { }

  ngOnInit() {
    this.form = this.fb.group({
      code: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern('-?[0-9]*(\\.[0-9]+)?')]],
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern('[A-Z,a-z, ]*')]],
      description: [null, [Validators.minLength(12), Validators.maxLength(72)]]
    });
  }

  createCommittee() {
    this.committeeService.createCommittee(this.form.value);
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
      console.log(this.done);
      console.log(this.todo);
    }
  }

  onClear() { this.form.reset(); }

}
