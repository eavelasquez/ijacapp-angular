import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../book/book.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommunityActionService } from '../../services/community-action.service';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: []
})
export class DialogComponent implements OnInit {

  date: string = new Date().getDate().toString();
  book: any;
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder,
              private communityActionService: CommunityActionService, private bookService: BookService) { }

  ngOnInit() {
    this.form = this.fb.group({
      version: '1.0',
      created: new Date().getDate(),
    });
    this.bookService.getBook().subscribe(res => {
      this.book = res;
      console.log(this.book);
    });
  }

  onSubmit() {
    this.form.addControl('user', new FormControl(this.communityActionService.community._id));
    this.bookService.createBook(this.form.value);
  }

}
