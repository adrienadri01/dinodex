import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaureDialogComponent } from './dinosaure-dialog.component';

describe('DinosaureDialogComponent', () => {
  let component: DinosaureDialogComponent;
  let fixture: ComponentFixture<DinosaureDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaureDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
