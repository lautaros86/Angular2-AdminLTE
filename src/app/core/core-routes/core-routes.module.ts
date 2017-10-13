import { NotFoundComponent } from './../not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './../../dashboard/dashboard.module#DashboardModule' },
  { path: 'limpio', loadChildren: './../../limpio/limpio.module#LimpioModule' },
  { path: 'chartjs', loadChildren: './../../chartjs/chartjs.module#ChartjsModule' },
  { path: 'morris', loadChildren: './../../morris/morris.module#MorrisModule' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class CoreRoutesModule { }
