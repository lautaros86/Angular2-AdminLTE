import { ChartjsBaseComponent } from './../components/chartjs-base/chartjs-base.component';
import { BoxComponent } from './../components/box/box.component';
import { RouterModule } from '@angular/router';
import { SmallBoxComponent } from './../components/small-box/small-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    SmallBoxComponent,
    BoxComponent,
    ChartjsBaseComponent
  ],
  exports: [
    SmallBoxComponent,
    BoxComponent,
    ChartjsBaseComponent
  ]
})
export class SharedModule { }
