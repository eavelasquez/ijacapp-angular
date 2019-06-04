import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get-started-register',
  templateUrl: './get-started-register.component.html',
  styleUrls: ['./get-started-register.component.scss']
})
export class GetStartedRegisterComponent implements OnInit {
  closeResult: string;
  form: FormGroup;
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      code: '',
      name: '',
      email: '',
      telephone: '',
      district: ''
    });
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
