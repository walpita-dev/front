import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CompleteResourceDto } from '../../shared/model/complete-resource.dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.scss']
})
export class ResourceTableComponent implements OnInit, AfterViewInit {
  @Input() resources: CompleteResourceDto[];
  @Input() isLoadingResults = false;
  @Output() addResourceToCart: EventEmitter<CompleteResourceDto> = new EventEmitter<CompleteResourceDto>();
  @Output() removeResourceFromCart: EventEmitter<CompleteResourceDto> = new EventEmitter<CompleteResourceDto>();
  @Output() modifyResource: EventEmitter<CompleteResourceDto> = new EventEmitter<CompleteResourceDto>();

  displayedColumns: string[] = ['FRName', 'ENName', 'status', 'type', 'created_at', 'last_modified_at', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  onAddResourceToCartClick(resource) {
    this.addResourceToCart.emit(resource);
  }

  onModifyResourceClick(resource) {
    this.modifyResource.emit(resource);
  }

  onDeleteResourceClick(resource) {
    this.removeResourceFromCart.emit(resource);
  }

}
