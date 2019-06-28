import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MemberService} from '../../services/member/member.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class MemberComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private memberService: MemberService) { }
  dataSource;
  members = [];
  columnsToDisplay = ['name', 'surname', 'telephone', 'occupation'];
  expandedElement: any | null;

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
    this.memberService.getMembers().subscribe((res: any) => {
      this.members = res;
      this.dataSource = this.members;
    });
  }

  onSubmit() {
    if (this.form.invalid) { return ; }
    this.memberService.createMember(this.form.value);
    this.memberService.getMembers();
    this.onClear();
  }

  onClear() { this.form.reset(); }
}
