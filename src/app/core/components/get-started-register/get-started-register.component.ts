import { Component, OnInit } from '@angular/core';
import { CommunityActionService } from '../../services/community-action.service';
import { MatDialog } from '@angular/material';
import { DialogFormComponent } from '../dialog/dialog-form.component';

@Component({
  selector: 'app-get-started-register',
  templateUrl: './get-started-register.component.html',
  styleUrls: ['./get-started-register.component.scss']
})
export class GetStartedRegisterComponent implements OnInit {

  date: number = new Date().getFullYear();
  constructor(public communityActionService: CommunityActionService, public dialog: MatDialog) { }

  ngOnInit() {
    this.communityActionService.load();
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
