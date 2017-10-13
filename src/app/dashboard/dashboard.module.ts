import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutesModule } from './dashboard-routes/dashboard-routes.module';

import { SharedModule } from '../shared/shared.module';

import { Dash1Component } from './dash1/dash1.component';
import { Dash2Component } from './dash2/dash2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutesModule
  ],
  declarations: [
    Dash1Component,
    Dash2Component
  ]
})
export class DashboardModule { }
