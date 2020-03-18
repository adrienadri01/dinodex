import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureListComponent } from './dinosaure-list.component';

describe('DinosaureListComponent', () => {
  let component: DinosaureListComponent;
  let fixture: ComponentFixture<DinosaureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
