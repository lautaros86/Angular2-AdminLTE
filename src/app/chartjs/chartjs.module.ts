import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [
  { path: '', component: ChartjsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ChartjsComponent,
  ]
})
export class ChartjsModule { }
