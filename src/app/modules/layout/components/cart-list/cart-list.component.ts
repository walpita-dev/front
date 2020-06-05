import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  DataRepositoryState,
  DataRepositoryStateModel,
  RemoveResource,
  RemoveAllResource,
} from 'src/app/core/store/data-repository/data-repository.state';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Select(DataRepositoryState) selectedResources$: Observable<DataRepositoryStateModel>;

  constructor(
    private readonly store: Store,
  ) {}

  ngOnInit(): void {}

  onDeleteClick(resource) {
    this.store.dispatch(new RemoveResource(resource));
  }

  onDeleteAll() {
    this.store.dispatch(new RemoveAllResource());
  }
}
