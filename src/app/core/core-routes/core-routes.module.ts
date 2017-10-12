import { NotFoundComponent } from './../not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard1', pathMatch: 'full' },
  { path: 'dashboard1', loadChildren: './../../dashboard/dashboard.module#DashboardModule' },
<<<<<<< HEAD
  { path: 'dashboard2', loadChildren: './../../dashboard/dashboard.module#DashboardModule' },
  { path: 'admin', loadChildren: './../../admin/admin.module#AdminModule' },
=======
>>>>>>> e26626534de991d32d2513c05a427f0087fd4e98
  { path: 'empty', loadChildren: './../../empty/empty.module#EmptyModule' },
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
