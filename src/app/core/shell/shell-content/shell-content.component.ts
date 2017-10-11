import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-shell-content',
  templateUrl: './shell-content.component.html',
  styleUrls: ['./shell-content.component.css']
})
export class ShellContentComponent implements OnInit {

  pageHeader = 'Encabezado de pagina';
  pageDescription = 'Descripcion opcional';

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
