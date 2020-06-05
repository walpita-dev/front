import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResourcePageComponent } from './create-resource.page';

describe('CreateResourceComponent', () => {
  let component: CreateResourcePageComponent;
  let fixture: ComponentFixture<CreateResourcePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResourcePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
