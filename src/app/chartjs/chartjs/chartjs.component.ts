import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {

  labels = ['label 1', 'label 2', 'label 3'];

  data = [350, 450, 100];

  dataSet = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  labelRadar = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  colors = [
    {
      backgroundColor: [
        'rgba(0, 166, 90, 0.8)',
        'rgba(60, 141, 188, 0.8)',
        'rgba(245, 105, 84, 0.8)'
      ]
    }
  ];
  public lineChartColors: Array<any> = [
    { // green
      backgroundColor: 'rgba(0, 166, 90, 0.2)',
      borderColor: 'rgba(0, 166, 90, 1)',
      pointBackgroundColor: 'rgba(0, 166, 90,1)',
      pointBorderColor: '#0F0',
      pointHoverBackgroundColor: '#0F0',
      pointHoverBorderColor: 'rgba(0, 166, 90,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(60, 141, 188,0.2)',
      borderColor: 'rgba(60, 141, 188,1)',
      pointBackgroundColor: 'rgba(60, 141, 188,1)',
      pointBorderColor: '#00F',
      pointHoverBackgroundColor: '#00F',
      pointHoverBorderColor: 'rgba(60, 141, 188,1)'
    },
    { // red
      backgroundColor: 'rgba(245, 105, 84,0.2)',
      borderColor: 'rgba(245, 105, 84,1)',
      pointBackgroundColor: 'rgba(245, 105, 84,1)',
      pointBorderColor: '#F00',
      pointHoverBackgroundColor: '#F00',
      pointHoverBorderColor: 'rgba(245, 105, 84,0.8)'
    }
  ];
  public areaDataColor: Array<any> = [
    { // green
      backgroundColor: 'rgba(0, 166, 90, 0.2)',
      fillColor: 'rgba(0, 166, 90, 0.9)',
      strokeColor: 'rgba(0, 166, 90,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(60, 141, 188, 0.2)',
      fillColor: 'rgba(60, 141, 188, 0.9)',
      strokeColor: 'rgba(60, 141, 188,1)'
    },
    { // red
      backgroundColor: 'rgba(245, 105, 84,0.2)',
      fillColor: 'rgba(245, 105, 84, 0.9)',
      strokeColor: 'rgba(245, 105, 84,0.8)'
    }
  ];
  public areaChartOptions = {
    // Boolean - Whether to show a dot for each point
    pointDot: false
  };
  constructor() { }

  ngOnInit() {
  }

  barChartLabels() {
    return ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  }

}
