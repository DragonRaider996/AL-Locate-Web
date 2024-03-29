import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateTransfer } from '../models/create-transfer.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TransferService {
  private transferURL: string = "https://accordallocate.herokuapp.com/transfer";
  private statsURL: string = "https://accordallocate.herokuapp.com/hospital/stats";
  constructor(private http: HttpClient) { }

  createTransfer(transferData: CreateTransfer) {
    console.log("Called");
    return this.http.post(this.transferURL, transferData)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }));
  }

  getTransferHistory() {
    return this.http.get(this.transferURL)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }

  getStats() {
    return this.http.get(this.statsURL)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }
}