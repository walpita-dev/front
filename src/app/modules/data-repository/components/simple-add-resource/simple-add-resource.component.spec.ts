import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAddResourceComponent } from './simple-add-resource.component';

describe('SimpleAddResourceComponent', () => {
  let component: SimpleAddResourceComponent;
  let fixture: ComponentFixture<SimpleAddResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAddResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAddResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
