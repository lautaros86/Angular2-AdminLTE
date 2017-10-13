import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { Dash1Component } from './../dash1/dash1.component';
import { Dash2Component } from './../dash2/dash2.component';

const routes: Routes = [
  { path: '', redirectTo: '1', pathMatch: 'full' },
  { path: '1', component: Dash1Component },
  { path: '2', component: Dash2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class DashboardRoutesModule { }
