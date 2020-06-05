import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcePageComponent } from './pages/resource/resource.page';
import { LoggedGuard } from 'src/app/shared/guards/logged.guard';
import { CreateResourcePageComponent } from './pages/create-resource/create-resource.page';
import { ModifyResourcePageComponent } from './pages/modify-resource/modify-resource.page';


const routes: Routes = [
  {
    path: 'resource/create',
    component: CreateResourcePageComponent,
    canActivate: [
      LoggedGuard,
    ],
  },
  {
    path: 'resource/modify/:uuid',
    component: ModifyResourcePageComponent,
    canActivate: [
      LoggedGuard,
    ],
  },
  {
    path: 'resource',
    component: ResourcePageComponent,
    canActivate: [
      LoggedGuard,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRepositoryRoutingModule { }
