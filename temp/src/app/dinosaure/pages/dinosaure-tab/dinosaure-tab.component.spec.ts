import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureTabComponent } from './dinosaure-tab.component';

describe('DinosaureTabComponent', () => {
  let component: DinosaureTabComponent;
  let fixture: ComponentFixture<DinosaureTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
