import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CompleteResourceDto } from 'src/app/modules/data-repository/shared/model/complete-resource.dto';

@Component({
  selector: 'app-cart-list-card',
  templateUrl: './cart-list-card.component.html',
  styleUrls: ['./cart-list-card.component.scss']
})
export class CartListCardComponent implements OnInit {
  @Input() completeResource: CompleteResourceDto;
  @Output() deleteClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {}

  onDeleteClick($event) {
    this.deleteClick.emit($event);
  }

}
