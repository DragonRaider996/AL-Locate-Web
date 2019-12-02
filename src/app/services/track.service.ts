import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TrackService {
  private transferURL: string = "https://accordallocate.herokuapp.com/transfer/track/";

  constructor(private http: HttpClient) { }

  getTrackHistory(id: number) {
    let url = this.transferURL + id;
    return this.http.get(url)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }
}