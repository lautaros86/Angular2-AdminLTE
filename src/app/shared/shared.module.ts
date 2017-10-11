import { RouterModule } from '@angular/router';
import { SmallBoxComponent } from './../components/small-box/small-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SmallBoxComponent
  ],
  exports: [
    SmallBoxComponent
  ]
})
export class SharedModule { }
