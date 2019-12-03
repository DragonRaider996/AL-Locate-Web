import { Component, OnInit } from '@angular/core';
import { Hospital } from '../models/hospital.model';
import { MatDialogRef } from '@angular/material/dialog';
import { TransferService } from '../services/transfer.service';
import { CreateTransfer } from '../models/create-transfer.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.css']
})
export class CreateTransferComponent implements OnInit {

  hospitalData: Hospital[] = [];
  selectedHospital: number = 2;
  patientName: string = "";
  patientAge: number = 25;
  disabled: boolean = false;

  constructor(public dialogRef: MatDialogRef<CreateTransferComponent>,
    private readonly transferService: TransferService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createHospitalData();
  }

  public async createTransfer() {
    console.log(this.selectedHospital)
    console.log(this.patientAge);
    console.log(this.patientName);
    this.disabled = true;
    let transferData: CreateTransfer = {
      toHospital: this.selectedHospital,
      patientAge: this.patientAge,
      patientName: this.patientName
    };
    this.transferService.createTransfer(transferData).subscribe((data) => {
      console.log(data);
      this.disabled = false;
      this.snackbar.open("Transfer created successfully.", '', {
        duration: 2000
      })
      this.dialogRef.close(data);
    }, (error) => {
      console.log(error);
      this.disabled = false;
      this.snackbar.open("Sorry transfer cannot be created.", '', {
        duration: 2000
      })
    });

  }

  public onCancel() {
    this.dialogRef.close();
  }

  private createHospitalData() {
    this.hospitalData.push({
      id: 2,
      name: "Halifax Infirmary (QEII HSC)"
    }, {
      id: 4,
      name: "QEII Health Sciences Centre"
    }, {
      id: 6,
      name: "Mackenzie Building @ the QEII"
    }, {
      id: 8,
      name: "IWK Children's Hospital"
    });
  }
}
