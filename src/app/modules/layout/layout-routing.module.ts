import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuard } from 'src/app/shared/guards/logged.guard';
import { LayoutPageComponent } from './pages/layout.page';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    canActivate: [LoggedGuard],
    children: [
      {
        path: 'data',
        loadChildren: () => import('../data-repository/data-repository.module').then(m => m.DataRepositoryModule),
      },
      {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
