import { EmptyRoutesModule } from './empty-routes/empty-routes.module';
import { EmptyComponent } from './empty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    EmptyRoutesModule
  ],
  declarations: [
    EmptyComponent
  ]
})
export class EmptyModule { }
