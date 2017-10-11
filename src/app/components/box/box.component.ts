import { Component, Input, OnInit } from '@angular/core';
/**
 * Genera un elemento "box" de admin-lte.
 * Titulo y contenido cargados por transclusion.
 * Permite definir algunos parametros por inputs.
 */
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  /**
   * Set box's top line color
   */
  @Input()
  boxType: string;
  /**
   * Show/hide box's header underline
   */
  @Input()
  withBorder = true;
  /**
   * Show/hide box's header minus button
   */
  @Input()
  minusButton = true;
  /**
   * Show/hide box's header close button
   */
  @Input()
  closeButton = true;

  constructor() { }

  ngOnInit() {

  }

  /**
   * Set box's header underline class (or do not)
   */
  underline() {
    if (this.withBorder) {
      return 'with-border';
    } else {
      return '';
    }
  }
}
