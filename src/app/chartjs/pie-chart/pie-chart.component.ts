import { Component, OnInit } from '@angular/core';
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

public labels: string[] = ['Tipo Juicio 1', 'Tipo 2', 'Otro Juicio'];
public data: number[] = [350, 450, 100];
public type = 'doughnut';
public colors = [
  {
    backgroundColor: [
      'rgba(0, 166, 90, 0.8)',
      'rgba(60, 141, 188, 0.8)',
      'rgba(245, 105, 84, 0.8)'
    ]
  }
];

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
