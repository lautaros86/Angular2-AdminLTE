import { Component, Input, OnInit } from '@angular/core';

/**
 * Genera una peuqeña caja.
 */
@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.css']
})
export class SmallBoxComponent implements OnInit {

  @Input()
  cantidad: number;
  @Input()
  simbolo: string;
  @Input()
  textoPrincipal: string;
  @Input()
  textoPie: string;
  @Input()
  claseIcono: string;
  @Input()
  colorBox: string;
  @Input()
  routerLink = '/';

  constructor() { }

  ngOnInit() {
  }

}
