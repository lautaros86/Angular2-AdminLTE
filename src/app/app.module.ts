import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ShellComponent],
  declarations: []
})
export class AppModule { }
