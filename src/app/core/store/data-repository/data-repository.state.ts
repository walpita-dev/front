import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';

import { CompleteResourceDto } from 'src/app/modules/data-repository/shared/model/complete-resource.dto';

export class AddResource {
  static readonly type = '[DataRepository] Add selected resource';
  constructor(public resource: CompleteResourceDto) {}
}

export class RemoveResource {
  static readonly type = '[DataRepository] Remove selected resource';
  constructor(public resource: CompleteResourceDto) {}
}

export class RemoveAllResource {
  static readonly type = '[DataRepository] Remove all selected resource';
}

export interface DataRepositoryStateModel {
  selectedResources: CompleteResourceDto[];
}

@State<DataRepositoryStateModel>({
  name: 'dataRepository',
  defaults: {
    selectedResources: [],
  }
})
@Injectable()
export class DataRepositoryState {
  @Selector()
  static selectedResources(state: DataRepositoryStateModel) {
    return state.selectedResources;
  }

  @Action(AddResource)
  addResource(ctx: StateContext<DataRepositoryStateModel>, addResource: AddResource) {
    const state = ctx.getState();
    ctx.patchState({
      selectedResources: [...state.selectedResources, addResource.resource],
    });
  }

  @Action(RemoveResource)
  removeResource(ctx: StateContext<DataRepositoryStateModel>, removeResource: RemoveResource) {
    const state = ctx.getState();
    ctx.patchState({
      selectedResources: state.selectedResources.filter(resource => resource.uuid !== removeResource.resource.uuid),
    });
  }

  @Action(RemoveAllResource)
  removeAllResource(ctx: StateContext<DataRepositoryStateModel>) {
    ctx.patchState({
      selectedResources: [],
    });
  }
}
