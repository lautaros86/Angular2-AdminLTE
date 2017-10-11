import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboard1Component,
    AdminDashboard2Component
  ]
})
export class AdminModule { }
