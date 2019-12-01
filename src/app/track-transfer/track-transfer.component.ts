import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TrackService } from '../services/track.service';
import { MatSnackBar } from '@angular/material';
import { TrackTransfer } from '../models/track-transfer.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-track-transfer',
  templateUrl: './track-transfer.component.html',
  styleUrls: ['./track-transfer.component.css']
})
export class TrackTransferComponent implements OnInit, OnDestroy {

  private lat = 51.678418;
  private lng = 7.809007;
  private disabled: boolean = false;
  private show: boolean = false;
  private transferId: number;
  private subscription: Subscription = new Subscription();

  constructor(private trackService: TrackService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log("Destroyed");
    this.subscription.unsubscribe();
  }

  fetchData() {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.trackService.getTrackHistory(this.transferId))
    ).subscribe((data: TrackTransfer) => {
      console.log("Data");
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.show = true;
    }, (error) => {
      this.snackbar.open("Invalid Transfer ID", '', {
        duration: 4000
      })
      this.show = false;
    })
  }

  onTrack() {
    console.log(this.transferId);
    if (this.transferId) {
      this.fetchData();
    } else {
      this.snackbar.open("Please provide a Transfer ID", '', {
        duration: 4000
      })
      this.show = false;
    }
  }

}
