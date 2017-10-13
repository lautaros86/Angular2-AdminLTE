import { Component, OnInit, Input } from '@angular/core';
/**
 * Generate chartjs.
 * Set type of chart by input
 * default type donut.
 */
@Component({
  selector: 'app-chartjs-base',
  templateUrl: './chartjs-base.component.html',
  styleUrls: ['./chartjs-base.component.css']
})
export class ChartjsBaseComponent implements OnInit {

  @Input()
  public labels: string[];
  @Input()
  public data: Array<number[]> | number[];
  @Input()
  public datasets: Array<{ data: Array<number[]> | number[], label: string }>;
  /**
   * Set type of chart "polarArea" or "doughnut"
   */
  @Input()
  public chartType = 'doughnut';
  @Input()
  public colors: Array<any>;
  @Input()
  public optionsData: any;
  @Input()
  public legend = true;

  constructor() { }

  ngOnInit() {

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
