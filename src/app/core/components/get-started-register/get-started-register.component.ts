import { Component, OnInit } from '@angular/core';
import { CommunityActionService } from '../../services/community-action.service';
import { MatDialog } from '@angular/material';
import { DialogFormComponent } from '../dialog/dialog-form.component';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-get-started-register',
  templateUrl: './get-started-register.component.html',
  styleUrls: ['./get-started-register.component.scss']
})
export class GetStartedRegisterComponent implements OnInit {

  date: number = new Date().getFullYear();
  user: boolean;
  constructor(public communityActionService: CommunityActionService, public dialog: MatDialog,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.communityActionService.load();
    this.user = this.authService.user;
    console.log(this.user);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '640px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La ventana emergente ha sido cerrada.');
    });
  }

}
