import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateTransferComponent } from '../create-transfer/create-transfer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  public onTransferCreate() {
    const dialogReference = this.dialog.open(CreateTransferComponent, {
      width: '500px',
      disableClose: true
    })
    dialogReference.afterClosed().subscribe((data) => {
      if (data) {
        this.router.navigate(["/transfer"]);
      }
    })
  }

  public onTransferHistory() {
    this.router.navigate(["/transfer"]);
  }

  public onStats() {
    this.router.navigate(["/stats"]);
  }

  public onTrackTransfer() {
    this.router.navigate(["/track"]);
  }

}
