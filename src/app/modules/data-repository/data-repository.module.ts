import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRepositoryService } from './shared/service/data-repository.service';
import { DataRepositoryRoutingModule } from './data-repository-routing.module';
import { ResourcePageComponent } from './pages/resource/resource.page';
import { SearchbarComponentModule } from 'src/app/shared/ui/searchbar/searchbar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { DataRepositoryState } from 'src/app/core/store/data-repository/data-repository.state';
import { ResourceTableComponent } from './components/resource-table/resource-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateResourcePageComponent } from './pages/create-resource/create-resource.page';
import { ModifyResourcePageComponent } from './pages/modify-resource/modify-resource.page';
import { SimpleAddResourceComponent } from './components/simple-add-resource/simple-add-resource.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ResourcePageComponent,
    ResourceTableComponent,
    CreateResourcePageComponent,
    ModifyResourcePageComponent,
    SimpleAddResourceComponent,
  ],
  imports: [
    CommonModule,
    DataRepositoryRoutingModule,
    SearchbarComponentModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    TranslateModule.forChild(),
    NgxsModule.forFeature([DataRepositoryState]),
  ],
  providers: [
    DataRepositoryService,
  ]
})
export class DataRepositoryModule { }
