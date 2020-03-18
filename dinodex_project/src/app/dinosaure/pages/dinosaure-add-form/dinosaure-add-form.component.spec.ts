import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureAddFormComponent } from './dinosaure-add-form.component';

describe('DinosaureAddFormComponent', () => {
  let component: DinosaureAddFormComponent;
  let fixture: ComponentFixture<DinosaureAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
