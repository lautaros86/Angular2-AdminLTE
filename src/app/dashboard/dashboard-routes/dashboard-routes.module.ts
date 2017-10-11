import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { Dash1Component } from './../dash1/dash1.component';

const routes: Routes = [
  { path: '', component: Dash1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class DashboardRoutesModule { }
