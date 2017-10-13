import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { LimpioComponent } from '../limpio/limpio.component';

const routes: Routes = [
  { path: '', component: LimpioComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class LimpioRoutesModule { }
