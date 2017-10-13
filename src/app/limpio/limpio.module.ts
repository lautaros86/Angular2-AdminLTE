import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimpioRoutesModule } from './limpio-routes/limpio-routes.module';

import { LimpioComponent } from './limpio/limpio.component';

@NgModule({
  imports: [
    CommonModule,
    LimpioRoutesModule
  ],
  declarations: [LimpioComponent]
})
export class LimpioModule { }
