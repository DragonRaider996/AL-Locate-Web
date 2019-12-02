import { Component, OnInit } from '@angular/core';
import { TransferHistory } from '../models/transfer-history.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit {
  transferData: TransferHistory[] = [];
  displayedColumns = ["transferId", "fromHospital", "toHospital", "patientName", "patientAge"]
  loadingData: boolean = true;

  constructor(private transferService: TransferService) { }

  ngOnInit() {
    this.transferService.getTransferHistory().subscribe((data: TransferHistory[]) => {
      console.log(data);
      this.transferData = data;
      this.loadingData = false;
    });
  }
}
