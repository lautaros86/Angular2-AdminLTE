import { EmptyComponent } from './../empty.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: EmptyComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: []
})
export class EmptyRoutesModule { }
