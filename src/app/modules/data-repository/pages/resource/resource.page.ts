import { Component } from '@angular/core';
import { CompleteResourceDto } from '../../shared/model/complete-resource.dto';
import { DataRepositoryService } from '../../shared/service/data-repository.service';
import { Store } from '@ngxs/store';
import { AddResource, RemoveResource } from 'src/app/core/store/data-repository/data-repository.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-repository-home',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss']
})
export class ResourcePageComponent {
  options: CompleteResourceDto[] = [];
  resources: CompleteResourceDto[] = [];

  constructor(
    private readonly dataRepositoryService: DataRepositoryService,
    private readonly store: Store,
    private readonly router: Router,
  ) {}

  onSearchValue(value) {
    if (value?.length >= 3) {
      this.dataRepositoryService.completeSearch('resource', 'FR', value).subscribe((options) => this.options = options);
    }
  }

  onSearchClick(value) {
    this.dataRepositoryService.completeSearch('resource', 'FR', value).subscribe((resources) => this.resources = resources);
  }

  onAddResourceToCart(resource) {
    this.store.dispatch(new AddResource(resource));
  }

  onRemoveResourceFromCart(resource) {
    this.store.dispatch(new RemoveResource(resource));
  }

  onModifyResource(resource) {
    this.router.navigate(['app/data/resource/modify', resource.uuid ]);
  }

  onCreateResource() {
    this.router.navigate(['app/data/resource/create']);
  }
}
