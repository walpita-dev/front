import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { CompleteResourceDto } from 'src/app/modules/data-repository/shared/model/complete-resource.dto';

@Component({
  selector: 'app-searchbar',
  templateUrl: 'searchbar.component.html',
  styleUrls: ['searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  myControl = new FormControl();
  @Input() buttonLabel: string;
  @Input() placeholderLabel: string;
  @Input() options: CompleteResourceDto[] = [];
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchClick: EventEmitter<Event> = new EventEmitter<Event>();

  filteredOptions: Observable<CompleteResourceDto[]>;

  ngOnInit() {
    this.myControl.valueChanges.pipe(
      tap(value => this.searchValue.emit(value)),
    ).subscribe();
  }

  onSearchClick($event) {
    console.log(this.myControl.value);
    this.searchClick.emit(this.myControl.value);
  }

  displayFn(resource: CompleteResourceDto): string {
    return resource?.FRName ? resource.FRName : '';
  }

}
