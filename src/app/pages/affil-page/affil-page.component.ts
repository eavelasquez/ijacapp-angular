import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormArray} from '@angular/forms';
import {CommitteeService} from '../../core/services/committee/committee.service';
import { AffilService } from '../../core/services/affil/affil.service';

@Component({
  selector: 'app-affil-page',
  templateUrl: './affil-page.component.html',
  styleUrls: ['./affil-page.component.scss']
})
export class AffilPageComponent implements OnInit {
  form: FormGroup;
  committees: any;
  public commit: any;
  selectedCommits = [];
  selectedCommit;
  constructor(private fb: FormBuilder, private committeeService: CommitteeService, private affilService: AffilService) { }

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
      occupation: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(48), Validators.pattern('')]],
      commits: this.fb.array([])
    });
    this.committeeService.showCommittees().subscribe(res => {
      console.log(res);
      this.committees = res;
    });
  }

  get nameForm() { return this.form.get('name'); }
  get surnameForm() { return this.form.get('surname'); }
  get documentForm() { return this.form.get('document') as FormGroup; }
  get dateBornForm() { return this.form.get('dateBorn'); }
  get addressForm() { return this.form.get('address'); }
  get genderForm() { return this.form.get('gender'); }
  get telephoneForm() { return this.form.get('telephone'); }
  get occupationForm() { return this.form.get('occupation'); }
  get commitsForm() { return this.form.get('commits') as FormArray; }

  onSubmit() {
    if (this.form.invalid) { return ; }
    this.affilService.createAffil(this.form.value);
  }

  onClear() { this.form.reset(); }

  private addCheckboxes(id: string) {
    const control = new FormControl(id);
    (this.form.controls.commits as FormArray).push(control);
    // this.committees.map((o, i) => {
    //   const control = new FormControl(o._id); // if first item set to true, else false
    //   (this.form.controls.commits as FormArray).push(control);
    // });
    // console.log(this.form.value);
  }

  onNgModelChange($event) {
    console.log($event);
    this.selectedCommit = $event;
    (this.form.controls.commits as FormArray).push(this.selectedCommit);
  }
}
