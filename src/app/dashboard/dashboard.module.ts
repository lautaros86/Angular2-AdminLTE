import { SharedModule } from '../shared/shared.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutesModule } from './dashboard-routes/dashboard-routes.module';
import { Dash1Component } from './dash1/dash1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutesModule
  ],
  declarations: [
    Dash1Component
  ]
})
export class DashboardModule { }
