import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  form: FormGroup;
  countries = COUNTRIES;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      document: this.fb.group({
        type: [null, Validators.required],
        number: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]]
      }),
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(36)]],
      surname: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      telephone: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(12)]],
      occupation: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(48)]]
    });
  }

  onClear() { this.form.reset(); }
}
