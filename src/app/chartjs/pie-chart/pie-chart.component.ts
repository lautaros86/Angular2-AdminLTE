import { Component, OnInit, Input } from '@angular/core';
/**
 * Dibuja un grafico Polar o Rosca.
 * Recibiendo por input [typeChart]="fooType"
 * fooType = "polarArea" || "doughnut";
 * El tipo "doughnut" se toma por defecto.
 */
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input()
  public labels: string[] = ['Tipo Juicio 1', 'Tipo 2', 'Otro Juicio'];
  @Input()
  public data: Array<number[]> | number[] = [350, 450, 100];
  @Input()
  public datasets: Array<{ data: Array<number[]> | number[], label: string }>;
  /**
   * Set type of chart "polarArea" or "doughnut"
   */
  @Input()
  public chartType = 'doughnut';
  @Input()
  public colors: Array<any> = [
    {
      backgroundColor: [
        'rgba(0, 166, 90, 0.8)',
        'rgba(60, 141, 188, 0.8)',
        'rgba(245, 105, 84, 0.8)'
      ]
    }
  ];
  @Input()
  public options: any;
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
