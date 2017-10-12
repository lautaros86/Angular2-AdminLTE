import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorrisComponent } from './morris/morris.component';

const routes: Routes = [
  { path: '', component: MorrisComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [MorrisComponent]
})
export class MorrisModule { }
