import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommunityActionService } from '../../services/community-action.service';
import { AuthService } from '../../../config/auth/auth.service';

@Component({
  selector: 'app-get-started-register',
  templateUrl: './get-started-register.component.html',
  styleUrls: ['./get-started-register.component.scss']
})
export class GetStartedRegisterComponent implements OnInit {
  closeResult: string;
  form: FormGroup;
  constructor(private modalService: NgbModal, private fb: FormBuilder,
              public communityActionService: CommunityActionService,
              private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      code: '',
      name: '',
      email: '',
      telephone: '',
      district: ''
    });
    this.communityActionService.load();
  }

  register() {
    console.log('Formulario: ' + this.form.value);
    if (this.form.invalid) { return ; }
    this.form.addControl('user', new FormControl(this.authService.user._id));
    this.communityActionService.registerC(this.form.value).subscribe( res => {
      console.log(res);
    } );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
