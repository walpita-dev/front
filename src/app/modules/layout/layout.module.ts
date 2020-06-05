import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout.page';
import { DataRepositoryRoutingModule } from '../data-repository/data-repository-routing.module';
import { SearchbarComponentModule } from 'src/app/shared/ui/searchbar/searchbar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LayoutRoutingModule } from './layout-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartListCardComponent } from './components/cart-list-card/cart-list-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    LayoutPageComponent,
    CartListComponent,
    CartListCardComponent,
  ],
  imports: [
    CommonModule,
    DataRepositoryRoutingModule,
    SearchbarComponentModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    LayoutRoutingModule,
    MatCardModule,
    TranslateModule.forChild(),
  ]
})
export class LayoutModule { }
