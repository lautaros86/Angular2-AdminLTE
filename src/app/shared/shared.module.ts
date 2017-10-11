import { BoxComponent } from './../components/box/box.component';
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
    SmallBoxComponent,
    BoxComponent
  ],
  exports: [
    SmallBoxComponent,
    BoxComponent
  ]
})
export class SharedModule { }
