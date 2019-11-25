import { Component, OnInit } from '@angular/core';
import { HospitalStats } from '../models/hospital-stats.model';
import { TransferService } from '../services/transfer.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  hospitalStats: HospitalStats = new HospitalStats();
  loadingData: boolean = true;
  chart: Chart;
  config: any;

  constructor(private transferService: TransferService) { }

  ngOnInit() {
    console.log(this.loadingData);
    this.transferService.getStats().subscribe((data: HospitalStats) => {
      this.loadingData = false;
      this.hospitalStats = data;
      console.log(this.loadingData);
    })
    let MONTHS = ['00:00', '01:00', '02:00', '03:00', '04:00',
      '05:0', '06:00', '07:00', '08:00', '09:00',
      '10:00', '11:00', '12:00', '13:00', '14:00',
      '15:00', '16:00', '17:00', '18:00', '19:00',
      '20:00', '21:00', '22:00', '23:00'];
    this.config = {
      type: 'line',
      data: {
        labels: MONTHS,
        datasets: [{
          label: 'Waiting Time',
          backgroundColor: '#0288D1',
          borderColor: '#0288D1',
          data: [2.3, 2.3, 2.5, 4.6, 2.3, 2.3, 2.5, 2.3,
            2.3, 3.4, 2.5, 2.3, 2.5, 2.3, 2.5, 3.0, 2.3, 3.4, 2.5, 2.9,
            2.3, 3.4, 2.5, 1.5],
          fill: false,
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Average Waiting Time'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Hour'
            },
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            },
            gridLines: {
              drawOnChartArea: false
            }
          }]
        }
      }
    }
    this.chart = new Chart('canvas', this.config);

  }

}
