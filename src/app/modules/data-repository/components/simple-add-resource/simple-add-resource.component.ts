import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-add-resource',
  templateUrl: './simple-add-resource.component.html',
  styleUrls: ['./simple-add-resource.component.scss']
})
export class SimpleAddResourceComponent implements OnInit {
  floatLabelControl = new FormControl('auto');

  constructor() { }

  ngOnInit(): void {
  }

}
