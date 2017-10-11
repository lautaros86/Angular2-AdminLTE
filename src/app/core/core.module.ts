import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ShellContentComponent } from './shell/shell-content/shell-content.component';
import { ShellControlSidebarComponent } from './shell/shell-control-sidebar/shell-control-sidebar.component';
import { ShellFooterComponent } from './shell/shell-footer/shell-footer.component';
import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
import { ShellLeftSideComponent } from './shell/shell-left-side/shell-left-side.component';

import { CoreRoutesModule } from './core-routes/core-routes.module';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    CoreRoutesModule
  ],
  declarations: [
    ShellComponent,
    ShellContentComponent,
    ShellControlSidebarComponent,
    ShellFooterComponent,
    ShellHeaderComponent,
    ShellLeftSideComponent,
    NotFoundComponent
  ],
  providers: [],
  exports: [ShellComponent]
})
export class CoreModule { }
